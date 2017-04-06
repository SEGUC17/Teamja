var mongoose= require('mongoose');


var db=mongoose.connection;

var reviewSchema = mongoose.Schema({
	name: {
		type: String
	},

});

 module.exports = mongoose.model('reviews', reviewSchema);