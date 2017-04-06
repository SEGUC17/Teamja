var mongoose = require('mongoose'); //esta3'dem link el database hena 
var projectschema = mongooseschema({
	name:String ,
	age:Number,
	title:String,

})

var project = mongoose.model("project",projectschema);
module.exports= project;







 // ka2eny b define el schema aw el attributes w ba7otaha fel table 3lshan asta3'demha f table tania law 3aiza 