import User from "../models/User";
import bcrypt from "bcryptjs";
import { generateToken }  from "../utils";


export const signUp = async (req, res) =>{
  try {
    const { email, password, fullname } = await req.body;

    const user = new User({
    email,
    password: await User.encryptPassword(password),
    fullname
  })

  await user.save();
  const token = generateToken(user)

  console.log(token);
  res.status(200).json(token)

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

    res.status(201).json({msg: 'Welcome!', token})
    
  } catch (error) {
    console.log(error);
  }
} 