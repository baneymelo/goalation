const { sign } = require("jsonwebtoken");
const { config } = require("../utils");

const generateToken = toToken =>{
    return sign({data: toToken._id}, config.SECRET, { expiresIn: '24h'})
}

module.exports = generateToken;