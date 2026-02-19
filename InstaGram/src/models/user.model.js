const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:[true,"Username already exists"],
        required:[ true,"User name is required"]
    },
    email:{
        type: String,
        unique: [true,"email already exists"],
        required:[true,"Email is required"]
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    bio:String,
    profileImage:{
        type:String,
        default:"https://ik.imagekit.io/anujyadav/Default%20user%20image.avif"
    }
})


const userModel = mongoose.model("users",userSchema)

module.exports = userModel