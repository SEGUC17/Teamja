var Review = require('../Models/Review');
let Work = require('../Models/Work');
let reviewController = {



    	getAllReviews :function (req,res){
	    Review.find(function(err,docs){
        console.log(docs);
        res.json(docs);
  });
}
}


module.exports = reviewController;