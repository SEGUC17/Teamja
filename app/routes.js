
var express = require('express');
var router = express.Router();
var session = require('express-session');
var ReviewController = require('./Controllers/reviewController');
var RatingController = require('./Controllers/ratingController');
var PromotionController = require('./Controllers/promotionController');






router.post('/review', ReviewController.addReview);

router.post('/rating', RatingController.addRating);

router.post('/promotion/:Username', PromotionController.createPromotion);







module.exports = router;