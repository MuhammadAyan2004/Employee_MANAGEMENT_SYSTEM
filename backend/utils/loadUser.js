const jwt = require("jsonwebtoken")
const userModel = require("../model/userModel")

exports.loadUser = async (req,res, next) =>{
    const token = req.cookies?.token  
    if(!token){
        res.locals.isLoggesIn = false
        res.locals.currentUser = null
        return next()
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await userModel.findById(decoded.userId)
        if(!user){
            res.clearCookie('token')
            res.locals.isLoggesIn = false
            res.locals.currentUser = null
            return next()
        }
        res.locals.isLoggesIn = true
        res.locals.currentUser = user
        req.user = user
        return next()
    }catch (err){
        console.log("error while loading user...", err)
        res.clearCookie('token')
        res.locals.isLoggesIn = false
        res.locals.currentUser = null
        next()
    }
}