var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var ratingSchema = mongoose.Schema({
    rating:{
        type:String,
       
        index:true
    },
    title:String
})
var Rating = module.exports = mongoose.model('Rating', ratingSchema);

