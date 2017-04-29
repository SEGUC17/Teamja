// require dependincies 
var express = require('express');
var router = express.Router();
var CompanyController = require('./Controllers/CompanyController');
var WorkController = require('./Controllers/WorkController');
var PaymentController=require('./Controllers/PaymentController');
var UserController = require('./Controllers/UserController');
var update =require('./Controllers/update');
var deletefunc = require('./Controllers/delete');

var booking =require('./Controllers/booking');
router.post('/booking/:id/:Username', booking.book);


router.post('/Mybooking/:Username', booking.getMyBook);
router.post('/viewbooking/:id', booking.getBook);
var PromotionController = require('./Controllers/promotionController');
var RatingController = require('./Controllers/ratingController');
var PromotionController = require('./Controllers/promotionController');
var ReviewController=require('./Controllers/reviewController');
router.post('/review/:Title', ReviewController.addReview);

router.post('/rating/:Title', RatingController.addRating);
router.post('/getreview/:Title', ReviewController.getAllReviews);

router.post('/getrating/:Title', RatingController.getAllRatings);




router.post('/search',CompanyController.Search);

router.post('/CompareByPriceAssc', WorkController.CompareByPriceAssc);

router.post('/CompareByPriceDesc', WorkController.CompareByPriceDesc);


router.post('/getpromotion', PromotionController.getAllPromotions);



 router.post('/workview', WorkController.getAllWork);


 router.post('/swork/:Username', WorkController.getWork);

router.post('/offline/:id',PaymentController.Payment);


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
router.post('/change/:Username', CompanyController.Change);
router.post('/signup', CompanyController.createCompany);


router.post('/login', CompanyController.login);





module.exports = router;