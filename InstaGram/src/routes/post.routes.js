const express = require("express")
const postRouter = express.Router()
const postController = require("../controllers/post.controller")
const multer = require("multer")
const upload = multer({storage: multer.memoryStorage() })


/**
 * Post / api/posts
 * - req.body = { caption , image-file }
 */

postRouter.post("/",upload.single("image"),postController.createPostController)

/**
 * GET/ api/posts/[protected]
 */

postRouter.get("/", postController.getPostController)

/**
 * Get/api/posts/details/:postid
 * - return detail about specific post with the id, also check wether the post belongs to the user that the request come from
 */

postRouter.get("/details/:postid",postController.getPostDetailsController )



module.exports = postRouter