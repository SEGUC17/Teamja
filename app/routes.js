// require dependincies 
var express = require('express');
var router = express.Router();
var UserController = require('./Controllers/UserController');
var ServiceController= require ('../controllers/ServiceController');
var session = require('express-session');
var update =require('./Controllers/update');
var deletefunc = require('./Controllers/delete');
var booking =require('./Controllers/booking');

router.post('/update/:id', update.theupdate);
router.post('/delete/:id',deletefunc.thedelete);
router.post('/booking/:id', booking.book);
 
router.post('/userlogin', UserController.login);
router.post('/usersignup', UserController.createUser);
router.post('/CompareByPriceAssc', ServiceController.CompareByPriceAssc);

router.post('/CompareByPriceDesc', ServiceController.CompareByPriceDesc);



module.exports = router;
