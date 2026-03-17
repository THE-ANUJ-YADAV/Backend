const express = require('express');
const userController = require('../controllers/user.controller')
const identifyuser = require("../middlewares/auth.middleware")

const userRouter = express.Router()

/**
 * @route Post /api/users/follow/:userid
 * @description follow a user
 * @access Private
 */
userRouter.post("/follow/:username", identifyuser,userController.followUserController)

/**
 * @route Post /api/users/unfollow/:userid
 * @description follow a user
 * @access Private
 */
userRouter.post("/unfollow/:username", identifyuser,userController.unfollowUserController)



module.exports = userRouter;