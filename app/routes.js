
var express = require('express');
var router = express.Router();
var session = require('express-session');
var ReviewController = require('./Controllers/reviewController');
var RatingController = require('./Controllers/ratingController');
var PromotionController = require('./Controllers/promotionController');







router.post('/getpromotion', PromotionController.getAllPromotions);

router.post('/getreview', ReviewController.getAllReviews);

router.post('/getrating', RatingController.getAllRatings);





module.exports = router;