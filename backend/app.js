const express = require('express')
const authRouter = require('./model/authRouter')

const app = express()


app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(authRouter)
// app.get("/signUp",(req, res)=>{
//     res.status(200).json({ message: "Route is working" })
// })


module.exports = app