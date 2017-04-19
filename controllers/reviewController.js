var Review = require('../models/review');
let Work = require('../models/Work');
let reviewController = {

addReview:function(req, res){
       let   trial = new  Review();
    
         var Title= req.body.title;
 trial.Review = req.body.review;
   


Work.findOne( {Title:Title},function(err, work){
            trial.Work_id=work.id;
         
      


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
    },


    	getAllReviews :function (req,res){
		Review.find(function(err,reviewArrays){
			if (err) res.send(err.message);
			else 
        res.sendFile(path.join(__dirname, '../', 'views', 'reviews.html',{reviewArrays}));
        //res.render('reviews', {reviewArrays});
		
	})
}
}


module.exports = reviewController;