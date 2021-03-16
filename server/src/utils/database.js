import mongoose from "mongoose";
import config from "./config";

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