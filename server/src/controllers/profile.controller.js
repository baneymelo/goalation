const User = require("../models/User");
const Goal = require("../models/Goal");
const { validateKeys } = require("../utils");


module.exports.getProfile = async (req, res)=>{
    
    try {
        const user = await User.findById(req.user, {_id:0, email:1, fullname:1, username:1})
        res.status(200).json(user)
            
    } catch (error) {
        return res.status(400)
    }   
}

module.exports.editProfile = async (req, res)=>{
    
    try {

        const { email } = await req.body;
        req.body = await validateKeys(req.body, res)
        await User.findByIdAndUpdate(req.user, req.body)

        res.status(200).json('Info successfully changed')
            
    } catch (error) {
        return res.status(400)
    }   
}

