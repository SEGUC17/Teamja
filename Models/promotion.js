var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var promotionSchema = mongoose.Schema({
    title:{
        type:String,
       
        index:true
    },
    UserName:String
})
var Promotion = module.exports = mongoose.model('Promotion', promotionSchema);


 



