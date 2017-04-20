var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var promotionSchema = mongoose.Schema({
    Title:{
        type:String,
       
        index:true
    },
    UserName:String,
    Company_id:{type:mongoose.Schema.Types.ObjectId, ref:'Company'}
})
var promotion =  mongoose.model('promotions', promotionSchema);

module.exports = promotion;				
 



