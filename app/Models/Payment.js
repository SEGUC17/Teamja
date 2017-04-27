var mongoose = require('mongoose');

var PaymentSchema=
 mongoose.Schema({
   Address:{
        type:String,
        required:true, 
    
    },
    TimeC:{
        type:String,
        required:true, 
       
    }
     ,  TimeB:{
        type:String,
        required:true, 
       
    }
    ,

 Username:String,
status:Boolean,
   phonenumber:Number,
   
 Amount:Number,
work_id:[{type:mongoose.Schema.Types.ObjectId, ref:'Work'}]


});

var Payment = mongoose.model("Payment", PaymentSchema);

module.exports = Payment;
