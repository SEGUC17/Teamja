var mongoose = require('mongoose');

var WorkSchema = mongoose.Schema({
    Title:{
        type:String,
        required:true, 
        unique:true
    },
   VideoURL:String,
   Image: { data: Buffer, contentType: String },
   Price:Number,
   Username:String,
   Company_id:[{type:mongoose.Schema.Types.ObjectId, ref:'Company'}]

});

var Work = module.exports = mongoose.model("Work", WorkSchema);

//module.exports = Work;				