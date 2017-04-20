var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var reviewSchema = mongoose.Schema({
    Review:{
        type:String,
       
        index:true
    },
   Work_id:{type:mongoose.Schema.Types.ObjectId, ref:'Work'}
})
var Review = module.exports = mongoose.model('Review', reviewSchema);

