const jwt = require("jsonwebtoken")
const userModel = require("../model/userModel")
const bcrypt = require("bcrypt")

exports.getHomePage = (req, res) => {
    res.status(200).json({ message: "im in home" })
}

exports.postLogin = async (req, res)=>{
    const {email, password} = req.body
    const user = await userModel.findOne({email})
    try{
        if(!user){
            console.log("user not found")
            return res.status(401).json({ message: "invalid credentials" })
        }
        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
            console.log("password mismatch")
            return res.status(401).json({ message: "invalid credentials" })
        }
        // creating jwt token
        const token = jwt.sign(
            {
                userId: user._id.toString(),
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRES_IN || "1h"
            }
        )
        res.cookie("token", token , {
            httpOnly:true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 60 * 60 * 1000 
        })
    
        res.status(200).json({message:"Post login route is working"})
    }catch (err) {
        console.log(err)
        return res.status(500).send("something went wrong!")
    }
}

exports.postLogout = (req, res)=>{
    res.clearCookie("token")
    res.status(200).json({message:"logout sucessfully"})
}

exports.getCurrentUser = (req, res)=>{
    res.status(200).json({user:req.user})
}