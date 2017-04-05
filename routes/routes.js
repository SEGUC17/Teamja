var express = require('express');
var router = express.Router();
var promotionController = require('../controllers/promotionController');
var ratingController = require('../controllers/ratingController');
var reviewController = require('../controllers/reviewController');


router.get('/', function(req, res){
	console.log('ana fel partenerdcompany');
	res.render('index');
});
router.get('/reviewrate', function(req, res){
	console.log('ana fel reviewrate');
	res.render('reviewrate');
});


router.post('/promote', promotionController.createPromotion);
	  
router.post('/review',reviewController.addReview);
	  
router.post('/rate', ratingController.addRating);
 



module.exports = router;