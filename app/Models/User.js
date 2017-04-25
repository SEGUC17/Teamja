var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({

    
    Username:{
        type:String,
        required:true, 
        unique:true,
        index: true }
    ,
  

    Password:{
       type:String,
        required:true, 
       
    } ,
    Email:{
       type:String,
       
       
    },
     Image: { data: Buffer, contentType: String }


})

var User = mongoose.model("User", UserSchema);

module.exports = User;