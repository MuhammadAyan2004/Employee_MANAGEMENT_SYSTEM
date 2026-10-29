const express = require('express')
const authController = require('../controller/authController')
const { authMiddleware } = require('../middleware/authmiddleware')

const authRouter = express.Router()

authRouter.post("/login", authController.postLogin)
authRouter.post("/logout", authController.postLogout )
authRouter.get("/currentUser", authMiddleware ,authController.getCurrentUser )


module.exports = authRouter