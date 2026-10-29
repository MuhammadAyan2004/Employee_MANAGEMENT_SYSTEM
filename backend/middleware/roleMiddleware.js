exports.roleMiddleware = (...allowedRoles)=>{
    return (req,res,next)=>{
        const user = req.user
        if(!user){
            return res.status(401).json({success: false, message:"authentication required"})
        }
        if(!allowedRoles.includes(user.role)){
            return res.status(403).json({ success: false, message:"access denied"})
        }
        next()
    }
}