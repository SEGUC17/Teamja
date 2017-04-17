let Work = require('../models/Work');
 let Company = require('../models/Company');

let WorkController = {
    
  

 createWork:function(req, res){
       let   trial = new  Work();
       User= req.session.Username;
       trial.Username= req.session.Username;
        trial.VideoURl= req.body.VideoURl;
       trial.Price=req.body.price;
        trial.Title= req.body.title;

   // trial.img.data = fs.readFileSync(req.files.userPhoto.path)


Company.findOne( {Username:User},function(err, company){
            trial.Company_id=company.id;
         
      
    console.log(trial.Company_id);
    

              trial.save(function(err, Work){
            if(err){
                res.send(err.message)
                console.log(err);
            }
           else{
      console.log(trial);
            res.render('index');

                
               
            }
              
        })   });
    }
}


module.exports = WorkController;
