var mongoose = require('mongoose');

var ratingSchema = mongoose.Schema({
    Rating:{
        type:String,
       
      },
    WorkTitle: String
})
var Rating = module.exports = mongoose.model('Rating', ratingSchema);

