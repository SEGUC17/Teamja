var mongoose = require('mongoose');

var WorkSchema = mongoose.Schema({
    Title:{
        type:String,
        required:true, 
        unique:true
    },
   VideoURL:String,
   Image: String,
   Price:String,
   Username:String,
Company_id:[{type:mongoose.Schema.Types.ObjectId, ref:'Company'}]

});

var Work = mongoose.model("Work", WorkSchema);

module.exports = Work;				