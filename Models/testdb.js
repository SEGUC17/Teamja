var mongoose = require('mongoose');


var WorkSchema = mongoose.Schema({
    title:{
        type:String,
        required:true, 
        unique:true
    },
     img: { data: Buffer, contentType: String },
   VideoURL:String,
   price:Number
 
});


var Work = mongoose.model("Work", WorkSchema);

module.exports = Work;