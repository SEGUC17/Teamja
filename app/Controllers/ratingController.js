let Rating = require('../Models/Rating');
let Work =require('../Models/Work');

let ratingController = {


	addRating:function(req, res){
       let   trial = new  Rating();
    
         var Title= req.body.title;
 trial.Rating = req.body.rating;
   // trial.img.data = fs.readFileSync(req.files.userPhoto.path)


Work.findOne( {Title:Title},function(err, work){
          trial.Work_Title =work.Title;
         
         
      


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
    

}
}



module.exports = ratingController;