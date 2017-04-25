var promotion = require('../Models/promotion');
 let Company = require('../Models/Company');
 
let promotionController = {



 createPromotion:function(req, res){
       let   trial = new  promotion();

       trial.Username=req.params.Username;
         trial.Title= req.body.Title;
          var pass=req.params.Username;

   // trial.img.data = fs.readFileSync(req.files.userPhoto.path)
console.log(pass);

Company.findOne( {Username:pass},function(err, company){
            trial.Company_id=company.id;
         
      


              trial.save(function(err, promotion){
            if(err){
                res.send(err.message)
                console.log(err);
            }
           else{
      console.log(trial);
          


                
               
            }
              
        })   });
    },


 
getAllPromotions :function (req,res){
  console.log("gel all promotions!!!");
  promotion.find(function(err,docs){
    console.log(docs);
    res.json(docs);
  });
}

}

module.exports = promotionController;