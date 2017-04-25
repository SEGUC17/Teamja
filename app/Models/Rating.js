var mongoose = require('mongoose');

var ratingSchema = mongoose.Schema({
    Rating:{
        type:String,
       
      },
    Work_Title: String
})
var Rating = module.exports = mongoose.model('Rating', ratingSchema);

