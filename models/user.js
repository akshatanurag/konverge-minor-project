// const validator = require("validator");
const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
const CryptoJS  = require('crypto-js')
const joi = require("@hapi/joi");
const jwt = require("jsonwebtoken");


var userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  token: {
    type: String,
    required: true,
    unique:  true
  }

});
mongoose.Promise = global.Promise;
// generating a hash
userSchema.methods.generateHash = (password)=>{
  return CryptoJS.SHA256(password).toString()
}

userSchema.methods.validatePassword = (password,hashPassword)=>{
  if(CryptoJS.SHA256(password).toString() == hashPassword)
  return true
  else
  return false
}

userSchema.methods.generateAuthToken = (bodyEmail)=>{
  return jwt.sign(
      {
        email: bodyEmail,
        type: "User"
      },"cjdsknkjdshvkjsdvhds7676565434sakjchkjashcksajhcksahcaskchsa",{
        expiresIn: "30d"
      }
    );
}

function validateSchema(user) {
  const schema = joi.object().keys({
    name: joi
      .string()
      .min(1)
      .max(50)
      .required(),
    email: joi
      .string()
      .min(5)
      .max(255)
      .required()
      .email(),
    password: joi
      .string()
      .min(5)
      .max(255)
      .required()
  });
  return schema.validate(user);
}


var User = mongoose.model("user", userSchema);

module.exports = {
  User,
  validate: validateSchema
};
