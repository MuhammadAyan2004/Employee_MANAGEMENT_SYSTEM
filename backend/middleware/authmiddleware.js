const jwt = require("jsonwebtoken");
const userModel = require("../model/userModel");

exports.authMiddleware = async (req,res, next)=>{
    try{
        const token = req.cookies?.token
        if(!token){
            return res.status(401).json({ success:false, message:"authentication required"})
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        if(!decoded){
            return res.status(401).json({success:false, message:"invalid or expired token"})
        }
        const user = await userModel.findById(decoded.userId)

        if(!user !== "active"){
            res.clearCookie("token",{
                httpOnly:true,
                secure: process.env.NODE_ENV === "production",
                sameSite:"lax",
                path:'/'
            })
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