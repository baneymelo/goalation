import User from "../models/User";
import bcrypt from "bcryptjs";
import { generateToken, config }  from "../utils";
import { verify } from "jsonwebtoken";

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

  res.status(200).send({token})

  } catch (error) {
    console.log(error);
  }
}


export const signIn = async (req, res) => {
  
  try {
    const { email, password } = await req.body;
    const user = await User.findOne({email}, {_id: 1, password: 1})

    if(!user) return res.status(401).json({msg: 'Invalid email'})
    const pwd = await bcrypt.compare(password, user.password)

    if(!pwd) return res.status(401).json({msg: 'Invalid password'})
    const token = generateToken(user);

    res.status(201).send({token})
    
  } catch (error) {
    console.log(error);
  }
} 


export const session = async (req, res) => {
  try {
    const authHeader = req.headers['authorization'];
        
        if(!authHeader) return res.send({session:false})
        const token = authHeader.split(' ')[1]
        const decoded = verify(token, config.SECRET)
        const valid = await User.findById(decoded.data,{_id: 1})

        if(!valid) return res.send({session:false})
        return res.send({session:true})
    
  } catch (error) {
    console.log(error);
  }
}
