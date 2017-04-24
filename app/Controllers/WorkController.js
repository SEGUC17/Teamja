let Work = require('../Models/Work');
 let Company = require('../Models/Company');

let WorkController = {
    


    getUserWork:function(req, res){
        
       var x=req.params.Username; 
        Work.find({Username:x},function(err, works){
            
              console.log(works);
                res.json(works);
            
               // res.render('home', {work});
        })
    }
  
,
    getAllWork:function(req, res){
        
        Work.find({},function(err, works){
            
              console.log(works);
                res.json(works);
            
               // res.render('home', {work});
        })
    },

 createWork:function(req, res){
       let   trial = new  Work();
     
  
        trial.VideoURl= req.body.VideoURl;
       trial.Price=req.body.Price;
        trial.Title= req.body.Title;
        var pass=req.params.Username;
              trial.Username=pass;

   // trial.img.data = fs.readFileSync(req.files.userPhoto.path)

Company.findOne( {Username:pass},function(err, company){
            trial.Company_id=company.id;
         
      
    console.log(trial.Company_id);
    

              trial.save(function(err, Work){
            if(err){
                res.send(err.message)
                console.log(err);
            }
           else{
      console.log(trial);
         

                
               
            }
              
        })   });
    }
}


module.exports = WorkController;
