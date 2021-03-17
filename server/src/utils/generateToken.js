import { sign } from "jsonwebtoken";
import { config } from "../utils";

const generateToken = toToken =>{
    return sign({data: toToken._id}, config.SECRET, { expiresIn: '24h'})
}

export default generateToken;