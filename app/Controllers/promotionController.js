var promotion = require('../Models/Promotion');
let Company = require('../Models/Company');
let promotionController = {





getAllPromotions :function (req,res){
  console.log("gel all promotions!!!");
	promotion.find(function(err,docs){
    console.log(docs);
    res.json(docs);
  });
}


}

module.exports = promotionController;