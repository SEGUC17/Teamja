var mongoose = require('mongoose');


var serviceSchema= mongoose.Schema({
	name: {
		type: String
	},
	price: {
		type: String
	}


});


/*var service = module.exports = mongoose.model('service', serviceSchema);

module.exports.sortByPrice = (price) =>{
	service.find().sort({price: 1});

	console.log(service.find().sort({price: 1}));

} 
*/