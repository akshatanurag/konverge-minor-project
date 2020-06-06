const express = require('express')
const joi = require("@hapi/joi");


const {User} = require('../models/user')
const middleware = require('../middlewares/middleware')


const router = express.Router()

router.get("/login",middleware.isLoggedOut,(req,res)=>{
    res.render("auth/login",{alert: "success", alertTitle: "error", alertMessage: `sddsc`})
})

router.post("/login",middleware.isLoggedOut,async (req,res)=>{
    try {
        var loginCreds ={email,password} = req.body
        const schema = joi.object().keys({
          email: joi.string().email().required(),
          password: joi.string().required()
        })
        if(a = schema.validate(loginCreds).error)
        return res.redirect("/login?success=false&message=Email or Password Required")
        
        var findUser = await User.findOne({
            email: loginCreds.email
          });
          if (!findUser) {
            return res.redirect("/login?success=false&message=Invalid Email or Password")
          }
        var userLogin = User();
        if(!await userLogin.validatePassword(loginCreds.password,findUser.password)){
            return res.redirect("/login?success=false&message=Invalid Email or Password")
        }
        req.session.secure = await findUser.token
        if(req.session.secure)
        res.redirect("/dashboard?success=true&message=LoggedIn Successfully")
        
         
    } catch (error) {
        console.log(error)
        return res.redirect("/login?success=false&message=Invalid Email or Password")

    }
})

router.get("/logout",middleware.isLoggedIn,(req,res)=>{
    req.session.secure = null
    if(!req.session.secure)
    return res.redirect("/login?success=true&message=Logged Out Successfully")

})

module.exports = router