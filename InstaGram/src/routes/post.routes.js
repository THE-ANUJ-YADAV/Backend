const express = require("express")
const postRouter = express.Router()
const postController = require("../controllers/post.controller")
const multer = require("multer")
const upload = multer({storage: multer.memoryStorage() })
const identifyuser = require("../middlewares/auth.middleware")
const likeModel = require("../models/like.model")

/**
 * @routes Post / api/posts
 *@description Create a post with the content and image (optional ) provided in the response
  */

postRouter.post("/",upload.single("image"), identifyuser ,postController.createPostController)

/**
 * @route GET/ api/posts/[protected]
 * @description get all posts created by the user that the request come from.
 */

postRouter.get("/", identifyuser , postController.getPostController)

/**
 * @route Get/api/posts/details/:postid
 *@description return detail about specific post with the id, also check wether the post belongs to the user that the request come from
 */

postRouter.get("/details/:id", identifyuser ,postController.getPostDetailsController )

/**
 * @route Post/api/posts/like/:postid
 * @description like a post with the id provided in the request params.
 */

postRouter.post("/like/:postId", identifyuser, postController.likePostController)



module.exports = postRouter