var express = require('express');
var router = express.Router();
var deletefunc = require('../Controllers/delete.js');
var update = require('../Controllers/update.js');

var WorkController= require ('../Controllers/WorkController');
var CompanyController = require ('../Controllers/CompanyController');
var promotionController = require('../controllers/promotionController');
var ratingController = require('../controllers/ratingController');
var reviewController = require('../controllers/reviewController');
var User = require('../models/user');



router.get('/', function(req, res){

	res.render('register');
}
);
/*router.post('/work', function(req, res){

	res.render('work');
}*/
router.post('/register', CompanyController.createCompany);

router.post('/re', WorkController.createWork);


router.get('/', function(req, res){
	console.log('ana fel partenerdcompany');
	res.render('index');
});
router.get('/reviewrate', function(req, res){
	console.log('ana fel reviewrate');
	res.render('reviewrate');
});

router.get('/getall',promotionController.getAllPromotions);

router.get('/getRev',reviewController.getAllReviews);

router.get('/getrates',ratingController.getAllRatings);


router.post('/promote', promotionController.createPromotion);
	  
router.post('/review',reviewController.addReview);
	  
router.post('/rate', ratingController.addRating);

router.get('/', function (req, res) {
    res.render('page');
});

router.get('/update', function (req, res) {
 res.render('update');

  /*   test.find({},function(err, testing){
            
            if(err)
                res.send(err.message);
            else
                res.render('page',{testing});
        })*/

});

router.post('/',deletefunc.thedelete); //delete

router.post('/update', update.theupdate); //put


router.post('/', EventController.getAllEvents);
router.post('/', RatingsController.getAllRatings);
router.post('/', ReviewsController.getAllReviews);
router.post('/', WorkController.CompareByPriceAssc);
router.post('/search',CompanyController.search);

router.get('/', ensureAuthenticated, function(req, res){
    res.render('index');
router.get('/login', function(req, res){
    res.render('login');
});
router.post('/login',
  passport.authenticate('local', {successRedirect:'/', failureRedirect:'/users/login',failureFlash: true}),
  function(req, res) {
    res.redirect('/');
  });
  router.get('/logout', function(req, res){
    req.logout();

    req.flash('success_msg', 'You are logged out');

    res.redirect('/users/login');
});
function ensureAuthenticated(req, res, next){
    if(req.isAuthenticated()){
        return next();
    } else {
        //req.flash('error_msg','You are not logged in');
        res.redirect('/users/login');
    }
}



module.exports = router;
