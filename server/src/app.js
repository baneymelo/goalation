import express from 'express'
import morgan from 'morgan'
import cors from "cors";
import authRouter from "./routes/auth.routes";

const app = express();
app.use(cors())

app.use(morgan('dev'))
app.use(express.json());

/* app.use('/',(req, res, next) =>{
    res.send('Hi!')
    next()
}) */
app.use('/auth', authRouter)

export default app;