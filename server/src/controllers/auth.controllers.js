import User from "../models/User";
import bcrypt from "bcryptjs";


export const signUp = async (req, res) =>{
  try {
    const { email, password, fullname } = await req.body;

    const user = new User({
    email,
    password: await User.encryptPassword(password),
    fullname
  })

  await user.save();
  console.log(user);

  res.status(200).json({msg: 'OK'})
  } catch (error) {
    /* res.status(400).json({msg: 'Invalid input'}) */
    console.log(error);
  }
}


export const signIn = async (req, res) => {
  try {
    const { email, password } = await req.body;
    const user = await User.findOne({email}, {_id: 1, password: 1})

    if(!user) return res.status(400).json({msg: 'Invalid email'})
    const pwd = await bcrypt.compare(password, user.password)

    if(!pwd) return res.status(400).json({msg: 'Invalid password'})

    res.json({msg: 'Welcome!'})
    
  } catch (error) {
    console.log(error);
  }
} 