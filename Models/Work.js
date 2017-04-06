var mongoose = require('mongoose');

var WorkSchema = mongoose.Schema({
    title:{
        type:String,
        required:true, 
        unique:true
    },
   VideoURL:String,
   img: { data: Buffer, contentType: String },
   price:Number,
UserName:String

 
});

var Work = mongoose.model("Work", WorkSchema);

module.exports = Work;				