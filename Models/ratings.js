var mongoose= require('mongoose');
//mongoose.connect("mongodb://localhost/events");

var db=mongoose.connection;

var ratingSchema = mongoose.Schema({
	name: {
		type: String
	},

});

 module.exports = mongoose.model('ratings', ratingSchema);