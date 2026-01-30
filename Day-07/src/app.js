const express = require("express")
const noteModel = require("./models/notes.models")

const app = express()

app.use(express.json())

//Post Notes

app.post("/notes", async (req,res)=>{
    const { title , description, age } = req.body

   const note = await noteModel.create({
        title, description, age
    })

    res.status(201).json({
        message: "Note Created Successfully",
        note
    })
})

module.exports = app