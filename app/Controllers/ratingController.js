let Rating = require('../Models/Rating');
let Work =require('../Models/Work');

let ratingController = {




   
    getAllRatings :function (req,res){
		Rating.find(function(err,docs){
    console.log(docs);
    res.json(docs);
  });

}
}



module.exports = ratingController;