var express = require('express');

var router = express.Router();
var promotionController = require('../controllers/promotionController');
var ratingController = require('../controllers/ratingController');
var reviewController = require('../controllers/reviewController');
var CompanyController = require('../controllers/CompanyController');
var session = require('express-session');
var WorkController =require('../controllers/WorkController');


router.get('/', function(req, res){
	console.log('ana fel register');
	res.render('register');
});
router.post('/work', function(req, res){
	res.render('work');
});

router.get('/reviewrate', function(req, res){

	res.render('reviewrate');
});

router.post('/register', CompanyController.createCompany);

router.post('/index', WorkController.createWork);

router.get('/getall', promotionController.getAllPromotions);

router.get('/getRev',reviewController.getAllReviews);

router.get('/getrates',ratingController.getAllRatings);

router.post('/promote', promotionController.createPromotion);
	  
router.post('/review',reviewController.addReview);
	  
router.post('/rate', ratingController.addRating);


module.exports = router;