var express = require('express');
var router = express.Router();
var WorkController=('../controllers/WorkController');
// Get Homepage
/*router.get('/', function(req, res){
	User.find({}, function(err, items) {
			res.render('index', {items});
			console.log(items);
		});
});
*/
router.post('/service', WorkController.CompareByPriceAssc);



module.exports = router;
