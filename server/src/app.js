const express = require('express')
const morgan = require('morgan')
const cors = require("cors")
const authRouter = require("./routes/auth.routes")
const goalsRouter = require("./routes/goals.routes")
const profileRouter = require("./routes/profile.routes")

const app = express();
app.use(cors())

app.use(morgan('dev'))
app.use(express.json());


app.use('/auth', authRouter)
app.use('/goals', goalsRouter)
app.use('/profile', profileRouter)

module.exports = app;