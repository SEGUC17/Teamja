var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var reviewSchema = mongoose.Schema({
    review:{
        type:String,
       
        index:true
    },
    title:{type: mongoose.Schema.Types.ObjectId, ref: 'Work'}
})
var Review = module.exports = mongoose.model('Review', reviewSchema);

