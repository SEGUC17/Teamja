var express = require('express');
var router = express.Router();
var deletefunc = require('../Controllers/delete.js');
var update = require('../Controllers/update.js');
var EventController=require ('../Controllers/EventsController');
var RatingsController=require ('../Controllers/RatingsController');
var ReviewsController=require ('../Controllers/ReviewsController');
var ServiceController= require ('../Controllers/ServiceController');


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
router.post('/', ServiceController.CompareByPriceAssc);



module.exports = router;