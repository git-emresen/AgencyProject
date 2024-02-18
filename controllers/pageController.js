const Portfolio=require("../models/portfolioModel")

exports.getIndex= async (req, res) => {
    const portfolios= await Portfolio.find().sort('-createdAt')
    res.render("index",{
       portfolios
    })
}


exports.getEdit= async (req,res)=>{
    const portfolio= await Portfolio.findById(req.params.id)
    
    res.render("edit",{
       portfolio
    })
   }
