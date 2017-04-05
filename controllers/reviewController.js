var Review = require('../models/review');
let reviewController = {

addReview:function(req, res){
    console.log('dakhalt el add review');
	var review = req.body.review;
	
	req.checkBody('review', 'Review is required').notEmpty();
	var errors = req.validationErrors();
		if(errors){
		res.render('reviewrate',{
			errors:errors
		});
	} else {
		var newReview = new Review({
			review: review
		});

		req.flash('success_msg', 'You added a new review');
		res.redirect('reviewrate');
		

	}
    }
}

module.exports = reviewController;