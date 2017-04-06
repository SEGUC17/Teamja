var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var promotionSchema = mongoose.Schema({
    title:{
        type:String,
       
        index:true
    },
    UserName:{type: mongoose.Schema.Types.ObjectId, ref: 'Company'}
})
var Promotion = module.exports = mongoose.model('Promotion', promotionSchema);


 



