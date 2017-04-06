var mongoose= require('mongoose');


var db=mongoose.connection;

var eventSchema = mongoose.Schema({
 title:{
        type:String,
        required:true, 
        unique:true
    },
   VideoURL:String,
   img: { data: Buffer, contentType: String },
   price:Number,
UserName:{type: mongoose.Schema.Types.ObjectId, ref: 'Company'}
});

 module.exports = mongoose.model('events', eventSchema);