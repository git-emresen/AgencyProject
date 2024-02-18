const path = require('path')
const fs = require('fs');
const Portfolio=require('../models/portfolioModel')


exports.saveProject= async (req,res)=>{

// Get the file that was set to our field named "image"
const image = req.files.img;

// If no image submitted, exit
if (!image) return res.sendStatus(400);

// Move the uploaded image to our upload folder
let body=req.body
Object.assign(body,{"img":req.files.img.name})
await Portfolio.create(req.body) 
image.mv(process.cwd()+'/public/assets/img/portfolio/' + image.name)

res.redirect('/')
}

exports.updateProject= async(req,res)=>{
const portfolio = await Portfolio.findOne({_id:req.params.id})
portfolio.projectName=req.body.projectName
portfolio.title=req.body.title
portfolio.description=req.body.description
portfolio.clientName=req.body.clientName
portfolio.category=req.body.category

const image=req.files.img
if (!image) return res.sendStatus(400);
//delete old img
const deletedImgPath=process.cwd()+'/public/assets/img/portfolio/' + portfolio.img

fs.unlink(deletedImgPath,()=>{
    console.log(`files deleted!`)
})
//update the img
portfolio.img=req.files.img.name
image.mv(process.cwd()+'/public/assets/img/portfolio/' + req.files.img.name)

portfolio.save()
res.status(201).redirect('/') 
}

