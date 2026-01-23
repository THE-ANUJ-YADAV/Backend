const express = require("express")

const app = express()

app.use(express.json())

const notes = []

app.get("/",(req,res)=>{
    res.send("Hello world")
})

// POST NOTES

app.post("/notes",(req,res)=>{
    console.log(req.body)
    notes.push(req.body)
    console.log(notes)
    res.send("note created")
})

app.get("/",(req,res)=>{
    res.send("Hello world")
})

app.get("/notes",(req,res)=>{
    res.send(notes)
})

// DELETE NOTES

app.delete("/notes/:index",(req,res)=>{
    delete notes[ req.params.index]

    res.send("Deleted successfully")
})

// PATCH NOTES(update partially )

app.patch("/notes/:index",(req,res)=>{
    notes[ req.params.index ].description = req.body.description

    res.send("Note updated successfully ")
})

module.exports = app