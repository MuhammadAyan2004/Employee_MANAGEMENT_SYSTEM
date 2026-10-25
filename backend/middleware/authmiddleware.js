const jwt = require("jsonwebtoken");
const userModel = require("../model/userModel");

exports.authMiddleware = async (req,res, next)=>{
    try{
        const token = req.cookies?.token
        if(!token){
            return res.status(401).json({
                message:"authentication required"
            })
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await userModel.findById(decoded.userId)

        if(!user){
            return res.status(402).json({
                message:"user not found"
            })
        }

        req.user = user
        next()
    }catch(err){
        return res.status(401).json({
            message: "Invalid or expired token"
        });
    }
}