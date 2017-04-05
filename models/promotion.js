var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var promotionSchema = mongoose.Schema({
    title:{
        type:String,
       
        index:true
    },
    username: String
})
var Promotion = module.exports = mongoose.model('Promotion', promotionSchema);


 



