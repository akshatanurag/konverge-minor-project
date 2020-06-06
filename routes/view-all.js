const express = require('express')
const fs = require('fs')
const csv = require('fast-csv')

const middleware = require('../middlewares/middleware')

const {company} = require('../models/company')



const router = express.Router()

router.get("/dashboard",middleware.isLoggedIn,async (req,res)=>{

    /***CODE TO SAVE CSV TO DB */
//    let arr = new Array()
// fs.createReadStream("./uploads/Company Final - Sheet1.csv").pipe(csv.parse({ headers: true })).on("data",async (row)=>{
//     arr.push(row)
//     const Company = new company(row)
//     await Company.save()

// }).on("end",()=>{
//     console.log(arr)
    
// }) 
// console.log(req.query.company)
    const compList = await company.find({
        compID: req.query.company,
        Domain: req.query.domain
    });
    return res.render("dashboard",{compList,m:req.currentUser})
})

module.exports = router