import express from 'express'
import morgan from 'morgan'
import cors from "cors";
import authRouter from "./routes/auth.routes";
import goalsRouter from "./routes/goals.routes";

const app = express();
app.use(cors())

app.use(morgan('dev'))
app.use(express.json());

app.use('/auth', authRouter)
app.use('/goals', goalsRouter)

export default app;