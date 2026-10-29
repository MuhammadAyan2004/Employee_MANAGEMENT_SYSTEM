exports.notFound = (req,res)=>{
    res.status(404).json({success:false, message:`route not found: ${req.method} ${req.originalUrl}`})
} 

exports.errorHandler = (error, req, res,next) =>{
    if (ress.headersSent) return next(error)
    console.log(error)
    const statusCode = error.statusCode || 500
    const message = statusCode >= 500 ? "An unexpected server error occurred." : error.message
    return res.status(statusCode).json({success:false, message})
}