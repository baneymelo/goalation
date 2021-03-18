import User from "../models/User";
import Goal from "../models/Goal";


export const getProfile = async (req, res)=>{
    
    try {
        const user = await User.findById(req.user, {_id:0, email:1, fullname:1, username:1})
        res.status(200).json(user)
            
    } catch (error) {
        return res.status(400)
    }   
}

export const editProfile = async (req, res)=>{
    
    try {
        const { email, username, fullname } = req.body;
        await User.findByIdAndUpdate(req.user, {email, username, fullname})

        res.status(200).json(user)
            
    } catch (error) {
        return res.status(400)
    }   
}