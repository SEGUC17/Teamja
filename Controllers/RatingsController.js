let ratings = require ('../models/ratings');
let RatingsController={
	getAllRatings :function (req,res){
		events.find(function(err,ratingArrays){
			if (err) res.send(err.message);
			else res.render('ratings', {ratingArrays});
		
	})
}}

module.exports = RatingsController;