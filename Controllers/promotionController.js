var Promotion = require('../models/promotion');
let promotionController = {

createPromotion:function(req, res){
    console.log('dakhalt el add promotion');
	var title = req.body.title;
	
	req.checkBody('title', 'Title is required').notEmpty();
	var errors = req.validationErrors();
		if(errors){
		res.render('index',{
			errors:errors
		});
	} else {
		var newPromotion = new Promotion({
			title: title,
			username: req.session.username
		});

		req.flash('success_msg', 'You added a new promotion');
		res.redirect('/'); 
    }
}
}

module.exports = promotionController;