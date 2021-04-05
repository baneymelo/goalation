import { config } from "../utils";
import { verify } from "jsonwebtoken";
import User from "../models/User";

const verifyToken = async (req, res, next) =>{
    try {
        const authHeader = req.headers['authorization'];

        if(!authHeader) return res.sendStatus(400)
        const token = authHeader.split(' ')[1]
        const decoded = verify(token, config.SECRET)
        const valid = await User.findById(decoded.data,{_id: 1})
       
        console.log(valid);

        if(!valid) return res.sendStatus(401)
        req.userId = valid;
        next();

    } catch (error) {
        return res.sendStatus(401)
    }
}

export default verifyToken;