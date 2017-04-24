// require dependincies 
var express = require('express');
var router = express.Router();
var UserController = require('./Controllers/UserController');
var ServiceController= require ('../controllers/ServiceController');
var session = require('express-session');


 
router.post('/userlogin', UserController.login);
router.post('/usersignup', UserController.createUser);
router.post('/CompareByPriceAssc', ServiceController.CompareByPriceAssc);

router.post('/CompareByPriceDesc', ServiceController.CompareByPriceDesc);



module.exports = router;