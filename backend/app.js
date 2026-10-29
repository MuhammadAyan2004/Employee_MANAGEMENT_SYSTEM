require('dotenv').config()

const express = require('express')
const cookieParser = require('cookie-parser')

const authRouter = require('./routes/authRouter')
const { loadUser } = require('./utils/loadUser')

const app = express()

app.disable("x-powered-by")
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())

app.use(loadUser)

app.use(authRouter)

module.exports = app