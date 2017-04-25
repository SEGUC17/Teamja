var mongoose = require('mongoose');

var reviewSchema = mongoose.Schema({
    Review:{
        type:String,
       
        index:true
    },
  Work_Title: String
})
var Review = module.exports = mongoose.model('Review', reviewSchema);

