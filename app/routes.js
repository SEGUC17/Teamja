// require dependincies 
var express = require('express');
var router = express.Router();
var CompanyController = require('./Controllers/CompanyController');
var WorkController = require('./Controllers/WorkController');

var UserController = require('./Controllers/UserController');


var booking =require('./Controllers/booking');
router.post('/booking/:id', booking.book);

var PromotionController = require('./Controllers/promotionController');
var RatingController = require('./Controllers/ratingController');
var PromotionController = require('./Controllers/promotionController');
var ReviewController=require('./Controllers/reviewController');
router.post('/review/:Title', ReviewController.addReview);

router.post('/rating/:Title', RatingController.addRating);
router.post('/getreview/:Title', ReviewController.getAllReviews);

router.post('/getrating/:Title', RatingController.getAllRatings);


router.post('/searchng',CompanyController.search1);

router.post('/CompareByPriceAssc', WorkController.CompareByPriceAssc);

router.post('/CompareByPriceDesc', WorkController.CompareByPriceDesc);


router.post('/getpromotion', PromotionController.getAllPromotions);

var update =require('./Controllers/update');
var deletefunc = require('./Controllers/delete');

 router.post('/workview', WorkController.getAllWork);

router.post('/update/:id', update.theupdate);
router.post('/delete/:id',deletefunc.thedelete); 

router.post('/work', WorkController.createWork);



router.post('/signup', CompanyController.createCompany);

 
router.post('/userlogin', UserController.login);
router.post('/usersignup', UserController.createUser);
 router.post('/workview/:Username', WorkController.getUserWork);

router.post('/work/:Username', WorkController.createWork);
router.post('/promotion/:Username', PromotionController.createPromotion);

router.post('/work', WorkController. getAllWork);
router.post('/profile/:Username', CompanyController.profile);
router.post('/signup', CompanyController.createCompany);


router.post('/login', CompanyController.login);





module.exports = router;