var express = require('express');
var router = express.Router();
var WorkController=('../controllers/workController');
var service = require('../models/service');
// Get Homepage
/*router.get('/', function(req, res){
	User.find({}, function(err, items) {
			res.render('index', {items});
			console.log(items);
		});
});
*/
router.get('/sortbyprice', WorkController.CompareByPriceAssc(req,res);



module.exports = router;
