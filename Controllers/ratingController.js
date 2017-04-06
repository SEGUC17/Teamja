let Rating = require('../models/rating');

let ratingController = {

addRating:function(req, res){
        console.log('dakhalt el add rate');
	var rating = req.body.rating;
	
	req.checkBody('rating', 'Rating is required').notEmpty();
	var title = req.body.title;
	var errors = req.validationErrors();
		if(errors){
		res.render('reviewrate',{
			errors:errors
		});
	} else {
		var newRating = new Rating({
			rating: rating,
			title: title
		});
		req.flash('success_msg', 'You added a new rating');
		res.redirect('reviewrate');
		

	}
    }
}


module.exports = ratingController;
