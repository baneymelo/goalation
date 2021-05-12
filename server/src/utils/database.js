const mongoose = require("mongoose");
const config = require("./config");

mongoose.connect(config.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})

const db = mongoose.connection;
db.on('open', _ =>{
    console.log('DB connected');
})