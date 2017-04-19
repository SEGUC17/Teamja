var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var ratingSchema = mongoose.Schema({
    Rating:{
        type:String,
       
      },
    Work_id:{type:mongoose.Schema.Types.ObjectId, ref:'Work'}
})
var Rating = module.exports = mongoose.model('Rating', ratingSchema);

