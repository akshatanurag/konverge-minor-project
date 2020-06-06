// const validator = require("validator");
const mongoose = require("mongoose");
// const joi = require("@hapi/joi");

var companySchema = new mongoose.Schema({
  Company: {
    type: String
  },
  Domain:{
    type: String,
    required: true 
  },

  Year:{
    type: Number,
    required: true 
  },
  Vacancy:{
    type: Number,
    required: true 
  },
  Appointed:{
    type: Number,
    required: true 
  },
  CSE:{
    type: Number,
    required: true 
  },
  EE:{
    type: Number,
    required: true 
  },
  CIVIL:{
    type: Number,
    required: true 
  },
  MECHANICAL:{
    type: Number,
    required: true 
  },
  ELECTRONICS:{
    type: Number,
    required: true 
  },
  Min_CGPA:{
    type: Number,
    required: true 
  },
  Avg_Packages:{
    type: Number,
    required: true 
  },
  highest_package:{
    type: Number,
    required: true 
  },
  compID:{
    type: Number,
    required: true 
  }

});
mongoose.Promise = global.Promise;



var company = mongoose.model("companies", companySchema);

module.exports = {
    company
};
