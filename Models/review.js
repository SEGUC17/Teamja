var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var reviewSchema = mongoose.Schema({
    review:{
        type:String,
       
        index:true
    },
    title:String
})
var Review = module.exports = mongoose.model('Review', reviewSchema);

