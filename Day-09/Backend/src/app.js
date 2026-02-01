const express = require("express")
const noteModel = require("./models/note.model")

const app = express()
app.use(express.json())

//Post = create new note and save data in mongo Db

app.post('/api/notes', async (req,res)=>{
    const{ title, description } = req.body

 const note =  await noteModel.create({
        title , description
    })

    res.status(201).json({
        message: "note created successfully",
        note
    })
})

//Get - Fetch all the notes from mongoDB and send then in the response

app.get("/api/notes", async (req,res)=>{
  const notes = await noteModel.find() //find method get data in the form of array.

  res.status(200).json({
    message: "Notes fetched successfully",
    notes
  })
})

//Delete - Delete note with the id from req.params

app.delete('/api/notes/:id',async (req,res)=>{
    const id = req.params.id

    await noteModel.findOneAndDelete(id)

    res.status(200).json({
        message: "Note deleted Successfully."
    })
})

//Patch - for update the notes(description)
//-req.body = {description}

app.patch('/api/notes/:id', async (req,res) =>{

    const id = req.params.id
    const { description } = req.body

     await noteModel.findByIdAndUpdate(id,{ description })
    
    res.status(200).json({
        message: "Note updates successfully",
        
    })
})

module.exports = app