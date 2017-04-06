var Review = require('../models/review');
let reviewController = {

addReview:function(req, res){
    console.log('dakhalt el add review');
	var review = req.body.review;
	
	req.checkBody('review', 'Review is required').notEmpty();
	var title = req.body.title;
	var errors = req.validationErrors();
		if(errors){
		res.render('reviewrate',{
			errors:errors
		});
	} else {
		var newReview = new Review({
			review: review,
			title:title

		});

		req.flash('success_msg', 'You added a new review');
		res.redirect('/getRev');
		

	}
    },
    	getAllReviews :function (req,res){
		Review.find(function(err,reviewArrays){
			if (err) res.send(err.message);
			else res.render('reviews', {reviewArrays});
		
	})
}
}


module.exports = reviewController;