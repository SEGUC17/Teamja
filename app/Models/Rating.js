var mongoose = require('mongoose');

var ratingSchema = mongoose.Schema({
    Rating:{
        type:String,
       
      },
    WorkTiltle: String
})
var Rating = module.exports = mongoose.model('Rating', ratingSchema);

