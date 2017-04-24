var mongoose = require('mongoose');

var reviewSchema = mongoose.Schema({
    Review:{
        type:String,
       
        index:true
    },
  WorkTitle: String
})
var Review = module.exports = mongoose.model('Review', reviewSchema);

