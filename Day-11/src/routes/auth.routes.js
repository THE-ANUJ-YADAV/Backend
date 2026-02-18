const express = require('express')
const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")
const authRouter = express.Router()

authRouter.post("/register", async (req,res) =>{
    const {email,name,password}  = req.body

    const isUserAlreadyExists = await userModel.findOne({ email })

    if(isUserAlreadyExists){
        return res.status(400).json({
            message: 'User already exist with this email address'
        })
    }

    const user = await userModel.create({
        email , password , name
    })

    const token = jwt.sign({
        id:user._id,
        email:user.email
    },
    process.env.JWT_SECRET
    )

    res.cookie("jwt_token", token)

    res.status(201).json({
        message: "User Registered",
        user,
        token
    })
})

///api/auth/protected

authRouter.post("/protected",(req,res)=>{
    console.log(req.cookies)

    res.status(200).json({
        message: "This is protected route"
    })
})


// controller

authRouter.post("/login", async (req,res)=>{
    const{ email , password} = req.body

    const user = await userModel.findOne({ email})

    if(!user){
        return res.status(404).json({
            message: "User not found with this email address"
        })
    }

    const isPasswordMatched = user.password === password
    if(!isPasswordMatched){
        return res.status(401).json({
            message: "Invalid Password"
        })
    }
})

module.exports = authRouter