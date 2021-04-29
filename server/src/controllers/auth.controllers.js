import User from "../models/User";
import bcrypt from "bcryptjs";
import { generateToken, config }  from "../utils";
import { verify } from "jsonwebtoken";


export const session = async (req, res) => {
  try {
    const authHeader = req.headers['authorization'];
      
    if(!authHeader) return res.status(400).send({ logged: false })
    const token = authHeader.split(' ')[1]
    const decoded = verify(token, config.SECRET)
    const user = await User.findById(decoded.data,{_id: 0, password: 0})
    
    if(!user) return res.status(400).send({ logged: false })

    return res.status(200).send({ logged: true })
    
  } catch (error){
    return res.send(error.name);
  }
}

export const signUp = async (req, res) =>{
  
  try {
    console.log(req.body);
    const { email, password, fullname, user_type } = await req.body;

    const user = new User({
    email,
    password: await User.encryptPassword(password),
    fullname,
    user_type
  })

  await user.save();
  const token = generateToken(user)

  res.status(200).send({ user: await depureUser(email), token })

  } catch (error) {
    console.log(error);
  }
}


export const signIn = async (req, res) => {
  
  try {
    const { email, password } = await req.body;

    const user = await User.findOne({email})
    if(!user) return res.status(401).send({msg: 'Please verify the email or password'})
    
    const pwd = await bcrypt.compare(password, user.password)
    if(!pwd) return res.status(401).send({msg: 'Please verify the email or password'})

    const token = generateToken(user);
    if(user && token) return res.status(201).send({user: await depureUser(email), token})

    
  } catch (error) {
    console.log(error);
  }
} 


const depureUser = async email =>{
  return await User.findOne({email},{ _id: 0, password: 0, __v:0 })
}