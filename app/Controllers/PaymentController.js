let Payment = require('../Models/Payment');

let PaymentController = {

Payment:function(req, res){
    console.log('bookfunctionshaghala');

  let x= new Payment();
   var id = req.params.id;
   x.Address=req.body.Address;
     
      x.phonenumber=req.body.Phonenumber;
      x.work_id=id;
x.TimeC=req.body.TimeC;
  x.TimeB=req.body.TimeB;
   x.Amount=req.body.Amount;
	    // the schema
	 x.save(function(err, booking){
            if(err){
                res.send(err.message)
                console.log(err);
            }
            else{


                console.log(x);
                

	}});}}
     
module.exports = PaymentController;