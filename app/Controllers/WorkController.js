let Work = require('../Models/Work');
 let Company = require('../Models/Company');

let WorkController = {
    






CompareByPriceAssc:function(req,res){


Work.find({}, [], {sort: {Price: 1}},function(err, posts) {
    
        res.json( posts);
   
     
        });

},

CompareByPriceDesc:function(req,res){


Work.find({}, [], {sort: {Price: -1}},function(err, posts) {
        res.json( posts);
        });


}
   , getUserWork:function(req, res){
        
       var x=req.params.Username; 
        Work.find({Username:x},function(err, works){
           
                res.json(works);
            
        })
    }
  
,
 

getWork:function(req, res){
    
       var y=req.body.Title; 
         var pass=req.params.Username;
        Work.findOne({Title:y, Username:pass},function(err, work){
            
              console.log(work);
                res.json(work);
            
        })
    },

   getAllWork:function(req, res){
        
        Work.find({},function(err, works){
            
    
                res.json(works);
            
        })
    },

 createWork:function(req, res){
       let   trial = new  Work();
     
  
        trial.VideoURL= req.body.VideoURL;
       trial.Price=req.body.Price;
        trial.Title= req.body.Title;
        var pass=req.params.Username;
              trial.Username=pass;
trial.Image=req.body.Image;


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
