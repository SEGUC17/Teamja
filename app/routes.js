// require dependincies 
var express = require('express');
var router = express.Router();
var CompanyController = require('./Controllers/CompanyController');
var WorkController = require('./Controllers/WorkController');
var session = require('express-session');

 router.post('/workview/:Username', WorkController.getUserWork);

router.post('/work/:Username', WorkController.createWork);

router.post('/profile/:Username', CompanyController.profile);
router.post('/signup', CompanyController.createCompany);

//router.post('/re', WorkController.createWork);

/*
router.post('/logout',function(req, res){
  req.session.destroy(function(){
     res.redirect('/');
  });
})
*/
router.post('/login', CompanyController.login);





module.exports = router;