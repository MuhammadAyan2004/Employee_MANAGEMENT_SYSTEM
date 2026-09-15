const express = require('express')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')

const authRouter = require('./routes/authRouter')
const { loadUser } = require('./utils/loadUser')

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
dotenv.config()

app.use(cookieParser())
app.use(loadUser)

app.use(authRouter)

module.exports = app