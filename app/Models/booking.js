var mongoose = require('mongoose');

var bookingSchema = mongoose.Schema({
    theusername:{
        type:String,
        required:true, 
    
    },
    Time:{
        type:String,
        required:true, 
       
    }
    ,
Username:String,
   phonenumber:String,
   
   primarykey:{type:String,
        required:true, 
        unique:true,
        index: true },
work_id:[{type:mongoose.Schema.Types.ObjectId, ref:'Work'}]
});


var Thebooking1 = mongoose.model("Thebooking1", bookingSchema);

module.exports = Thebooking1; 