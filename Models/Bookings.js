var mongoose = require('mongoose');

var BookingSchema= mongoose.Schema({

    serviceName:String,
   UsernameCompany:String,
    UsernameCustomer:String
    Date:Date,
    Telephone:Number,
 ,
    email:{
       type:String,
        required:true, 
       
    },
    


})

BookingSchema.index({Date:1,,serviceName:1},{unique:true});
var Bookings = mongoose.model("Bookings", BookingsSchema);

module.exports = Bookings;