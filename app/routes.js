// require dependincies 
var express = require('express');
var router = express.Router();
var ServiceController = require('./Controllers/ServiceController');

var session = require('express-session');


router.post('/CompareByPriceAssc', ServiceController.CompareByPriceAssc);

router.post('/CompareByPriceDesc', ServiceController.CompareByPriceDesc);

 module.exports = router;
