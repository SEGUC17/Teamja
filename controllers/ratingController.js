let Rating = require('../models/rating');
let Work =require('../models/Work');

let ratingController = {


	addRating:function(req, res){
       let   trial = new  Rating();
    
         var Title= req.body.title;
 trial.Rating = req.body.rating;
   // trial.img.data = fs.readFileSync(req.files.userPhoto.path)


Work.findOne( {Title:Title},function(err, work){
            trial.Work_id=work.id;
         
      


              trial.save(function(err, rating){
            if(err){
                res.send(err.message)
                console.log(err);
            }
           else{
      console.log(trial);
          
	    req.flash('success_msg', 'You added a new promotion');
		res.redirect('/getrates'); 
                
               
            }
              
        })   });
    },


   
    getAllRatings :function (req,res){
		Rating.find(function(err,ratingArrays){
			if (err) res.send(err.message);
			else 
        res.sendFile(path.join(__dirname, '../', 'views', 'rates.html',{ratingArrays}));
        //res.render('rates', {ratingArrays});
		
	})
}
}



module.exports = ratingController;
