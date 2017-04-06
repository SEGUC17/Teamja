let ratings = require ('../models/reviews');
let ReviewsController={
	getAllReviews :function (req,res){
		events.find(function(err,reviewArrays){
			if (err) res.send(err.message);
			else res.render('reviews', {reviewArrays});
		
	})
}}

module.exports = ReviewsController;