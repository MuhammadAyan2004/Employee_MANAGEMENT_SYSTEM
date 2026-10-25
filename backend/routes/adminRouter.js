const express = require('express')
const adminRouter = express.Router()
const adminController = require('../controller/adminController')
const { roleMiddleware } = require('../middleware/roleMiddleware')




module.exports = adminRouter

