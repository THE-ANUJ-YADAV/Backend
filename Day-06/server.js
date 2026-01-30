const app = require("./src/app");
const mongoose = require("mongoose")

function connectToDb(){
    mongoose.connect("mongodb+srv://anuj:Anuj123@cluster0.ckitlen.mongodb.net/day-06")
    .then(()=>{
        console.log("Connected to database")
    })
}

connectToDb()

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})