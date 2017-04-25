let Thebooking1 = require('../Models/booking');

let Thebooking = {

book:function(req, res){
    console.log('bookfunctionshaghala');

  
    //var old= req.body.oldtitle;
      var id = req.params.id;
      let x= new Thebooking1();
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