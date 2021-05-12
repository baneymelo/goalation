const dotenv = require('dotenv');
dotenv.config()

 const config = {
    PORT:  process.env.PORT,
    DB_URI: process.env.DB_URI,
    SECRET: process.env.SECRET
} 

module.exports = config;