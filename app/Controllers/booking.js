let Thebooking1 = require('../Models/booking');

let Thebooking = {




getBook:function(req, res){
        
       var x=req.params.id; 
        Thebooking1.find({work_id:x},function(err, works){
           
                res.json(works);
            
        })
    }
  
,

getMyBook:function(req, res){
        
   var y=req.params.Username;
        Thebooking1.find({Username:y},function(err, works){
           console.log(works);
                res.json(works);
            
        })
    }




,



book:function(req, res){
    console.log('bookfunctionshaghala');

  
    
      
        
        var y=req.params.Username;

      var id = req.params.id;
      let x= new Thebooking1();
      x.Username=y;
      x.theusername=req.body.theusername;
      x.phonenumber=req.body.Phonenumber;
      x.work_id=id;
x.Time=req.body.Time;
      x.primarykey=id+x.Time+"";
     
       
	    // the schema
	 x.save(function(err, booking){
            if(err){
                res.send(err.message)
                console.log(err);
            }
            else{


                console.log(booking);
                

	}});}}
     
module.exports = Thebooking;