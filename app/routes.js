// require dependincies 
var express = require('express');
var router = express.Router();
var UserController = require('./Controllers/UserController');
var session = require('express-session');


 
router.post('/userlogin', UserController.login);
router.post('/usersignup', UserController.createUser);




module.exports = router;