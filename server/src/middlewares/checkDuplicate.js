import User from "../models/User";

const checkDuplicate = async (req, res, next) =>{
    try {
        const { email } = await req.body;
        const user = await User.findOne({email},{_id: 0, email: 1})
        
        if(user) return res.sendStatus(400)
        next();

    } catch (error) {
        return res.sendStatus(400);
    }
}

export default checkDuplicate;