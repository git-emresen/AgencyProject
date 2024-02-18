const mongoose=require('mongoose')

const Schema=mongoose.Schema

const portfolioSchema=new Schema({
    projectName:String,
    title:String,    
    description:String,
    img:String,
    clientName:String, 
    category:String 

})

const Portfolio=mongoose.model("Portfolio",portfolioSchema)

module.exports=Portfolio
