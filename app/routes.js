var express= require ('express');
var router = express.Router();
var HomeController = require('./Controllers/homeController');




router.post('/searchng',HomeController.search1);

module.exports = router;