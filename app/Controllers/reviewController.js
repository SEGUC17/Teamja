var Review = require('../Models/Review');
let Work = require('../Models/Work');
let reviewController = {

getAllReviews :function (req,res){
      Review.find({Work_Title:req.params.Title},function(err,docs){
        console.log(docs);
        res.json(docs);
  });
},

addReview:function(req, res){
       let   trial = new  Review();
    
         var Title=req.params.Title;
 trial.Review = req.body.review;
   
      trial.Work_Title =Title;
         
              trial.save(function(err, promotion){
            if(err){
                res.send(err.message)
                console.log(err);
            }
           else{
      console.log(trial);
          
	 
                
               
            }
              
        })   
    }

}


module.exports = reviewController;