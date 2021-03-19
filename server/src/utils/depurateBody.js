import User from "../models/User";

const validateKeys = async (obj, res) =>{
    
    try {
        const newObj = {}

        if(obj.email){            
            if(!validEmail(obj.email)) throw Error('Invalid email')
            if(await existEmail(obj.email)) throw Error('Email already exist')
            newObj.email = obj.email;
        }
                
        return newObj;
        
    } catch (error) {
        return res.status(400).json(error.message)
    }
}

const validEmail = arg =>{
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return reg.test(arg)
}

const existEmail = async arg =>{
    return await User.findOne({email: arg},{_id: 0, email: 1}) 
}

export default validateKeys;