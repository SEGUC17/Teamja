var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var ratingSchema = mongoose.Schema({
    rating:{
        type:String,
       
        index:true
    },
    title:{type: mongoose.Schema.Types.ObjectId, ref: 'Work'}
})
var Rating = module.exports = mongoose.model('Rating', ratingSchema);

