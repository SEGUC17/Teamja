var mongoose = require('mongoose');

var CompanySchema = mongoose.Schema({

    
    Username:{
        type:String,
        required:true, 
        unique:true,
        index: true }
    ,
    Address:String,
    Telephone:Number,
  

    Password:{
       type:String,
        required:true, 
       
    } ,
    Email:{
       type:String,
        required:true, 
       
    },
     Image: String


})

var Company = mongoose.model("Company", CompanySchema);

module.exports = Company;