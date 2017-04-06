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
  

    password:{
       type:String,
        required:true, 
       
    } ,
    email:{
       type:String,
        required:true, 
       
    },
     img: { data: Buffer, contentType: String }


})

var Company = mongoose.model("Company", CompanySchema);

module.exports = Company;