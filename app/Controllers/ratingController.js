let Rating = require('../Models/Rating');
let Work =require('../Models/Work');

let ratingController = {


    getAllRatings :function (req,res){
    Rating.find({Work_Title:req.params.Title},function(err,docs){
    console.log(docs);
    res.json(docs);
  });}
,
	addRating:function(req, res){
       let   trial = new  Rating();
    
       
 trial.Rating = req.body.rating;
   // trial.img.data = fs.readFileSync(req.files.userPhoto.path)
     trial.Work_Title =req.params.Title;
         
        
              trial.save(function(err, rating){
            if(err){
                res.send(err.message)
                console.log(err);
            }
           else{
      console.log(trial);
          
	  
                
               
            }
              
        })   ;
    

}
}



module.exports = ratingController;