var mongoose = require('mongoose');
var db = mongoose.connection;

var serviceSchema= mongoose.Schema({
	name: {
		type: String
	},
	price: {
		type: String
	}


});
module.exports=mongoose.model('service', serviceSchema);


/*var service = module.exports = mongoose.model('service', serviceSchema);

module.exports.sortByPrice = (price) =>{
	service.find().sort({price: 1});

	console.log(service.find().sort({price: 1}));

} 
*/