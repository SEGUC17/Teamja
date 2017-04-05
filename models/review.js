var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var reviewSchema = mongoose.Schema({
    review:{
        type:String,
       
        index:true
    }
})
var Review = module.exports = mongoose.model('Review', reviewSchema);

