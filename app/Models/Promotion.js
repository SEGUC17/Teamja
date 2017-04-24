var mongoose = require('mongoose');

var promotionSchema = mongoose.Schema({
    Title:{
        type:String,
       
        index:true
    },
    Username:String,
    Company_id:{type:mongoose.Schema.Types.ObjectId, ref:'Company'}
})
var promotion =  mongoose.model('promotions', promotionSchema);

module.exports = promotion;				
 