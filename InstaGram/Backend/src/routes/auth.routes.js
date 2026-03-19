const express = require('express')
const authController = require("../controllers/auth.controllers")
const identifyuser = require("../middlewares/auth.middleware")

const authRouter = express.Router()

/**
 * Post /api/auth/register
 */
authRouter.post('/register',authController.registerController )

/**
 * Post /api/auth/login
 */

authRouter.post("/login", authController.loginController)

/**
 * @route Get/api/auth/get-me
 * @description Get the currently logged in user's information
 * @access Private
 */
authRouter.get("/get-me", identifyuser , authController.getMeController)

module.exports = authRouter