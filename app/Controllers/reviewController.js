var Review = require('../Models/Review');
let Work = require('../Models/Work');
let reviewController = {

addReview:function(req, res){
       let   trial = new  Review();
    
         var Title= req.body.title;
 trial.Review = req.body.review;
   


Work.findOne( {Title:Title},function(err, work){
            trial.Work_Title =work.Title;
         
      


              trial.save(function(err, promotion){
            if(err){
                res.send(err.message)
                console.log(err);
            }
           else{
      console.log(trial);
          
	    req.flash('success_msg', 'You added a new promotion');
		res.redirect('/getRev'); 
                
               
            }
              
        })   });
    }

}


module.exports = reviewController;