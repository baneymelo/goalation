const { sign } = require("jsonwebtoken");
const config = require("../utils/config");

console.log(config);

const generateToken = toToken =>{
    return sign({data: toToken._id}, config.SECRET, { expiresIn: '24h'})
}

module.exports = generateToken;