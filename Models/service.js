var mongoose = require('mongoose');
var db = mongoose.connection;

var serviceSchema= mongoose.Schema({
	name: {
		type: String
	},
	price: {
		type: Number
	}
});

var Service;

//if (mongoose.models.Service) {
 // Service = mongoose.model('Posts');
//} else {
  Service = mongoose.model('Posts', serviceSchema, 'posts');
//}

//var service=module.exports=mongoose.model('service', serviceSchema);

//var post1 = new Service({name: "Cat", price: 10});
//var post2 = new Service({name: "Dog", price: 20});
//var post3 = new Service({name: "Horse", price: 30});
//var post4 = new Service({name: "Elephant", price: 40});
//post1.save();
//post2.save();
//post3.save();
//post4.save();

module.exports = Service;
module.exports.sortByPrice = (price) =>{
	Service.find().sort({price: -1});
}
module.exports.getAllPosts = function(callback){
	var mydata;
	console.log("Entering GetAllPosts...")
	return Service.find({}, [], {sort: {price: -1}},function(err, posts) {
				}).exec();
}
/*var service = module.exports = mongoose.model('service', serviceSchema);

module.exports.sortByPrice = (price) =>{
	service.find().sort({price: 1});

	console.log(service.find().sort({price: 1}));

} 
*/