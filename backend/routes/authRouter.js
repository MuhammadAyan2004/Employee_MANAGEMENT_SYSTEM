const express = require('express')
const authController = require('../controller/authController')
const { authMiddleware } = require('../middleware/authmiddleware')

const authRouter = express.Router()


authRouter.get("/", authController.getHomePage)
authRouter.post("/login", authController.postLogin)
authRouter.get("/logout", authController.postLogout )
authRouter.get("/currentUser", authMiddleware ,authController.getCurrentUser )


module.exports = authRouter