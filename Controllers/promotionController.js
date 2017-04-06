var promotion = require('../models/promotion');
let promotionController = {

createPromotion:function(req, res){
    console.log('dakhalt el add promotion');
	var username = req.session.Username;
	var title = req.body.title;

	req.checkBody('title', 'Title is required').notEmpty();
	var errors = req.validationErrors();
		if(errors){
		res.render('index',{
			errors:errors
		});
	} else {
		var newPromotion = new promotion({
			title: title,
			username: req.session.username
		});
		console.log(newPromotion);

		req.flash('success_msg', 'You added a new promotion');
		res.redirect('/getall'); 
    }
},
getAllPromotions :function (req,res){
		promotion.find(function(err,promotionArrays){
			console.log(promotionArrays);
			if (err) res.send(err.message);
			else res.render('promotion', {promotionArrays});

		
	})
}


}

module.exports = promotionController;