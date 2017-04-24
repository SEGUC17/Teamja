var promotion = require('../Models/Promotion');
let Company = require('../Models/Company');
let promotionController = {



 createPromotion:function(req, res){

  console.log("createpromoooo");
       let   trial = new  promotion();
       trial.Title= req.body.title;
       var element = req.params.Username;
       trial.Username = element; 

  console.log('dakhalt create promotionnnn');


Company.findOne( {Username:element},function(err, company){
            trial.Company_id=company.id;
         
      


              trial.save(function(err, promotion){
            if(err){
                res.send(err.message)
                console.log(err);
            }
           else{
                console.log(trial);
 
                       }
              })   
            });
    }

}

module.exports = promotionController;