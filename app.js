const express=require("express")
const path=require("path")
const mongoose=require('mongoose')
const ejs=require('ejs')
const fileUpload = require('express-fileupload')
const pageController=require('./controllers/pageController')
const projectController=require('./controllers/projectController')

mongoose.connect("mongodb://localhost:27017/test").then(()=>{
console.log("connected")
}).catch(()=>{
    console.log("baglantı hatası")
})

const app=express()
const port=3000

/* app.use(serveStatic("views")) */
app.use(express.static("public"))
app.use(express.Router())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(fileUpload())
app.set('view engine','ejs')

/* app.get("/",(req,res)=>{
   res.sendFile(path.resolve("views/index.html"))      
})*/

app.get("/",pageController.getIndex)
app.get("/getEdit/:id",pageController.getEdit)
app.post("/saveProject",projectController.saveProject)
app.post("/updateProject/:id",projectController.updateProject)








app.listen(port,()=>{
    console.log(`Server listening on port ${port}`)
})

