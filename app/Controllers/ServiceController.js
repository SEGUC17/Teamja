var Service = require ('../models/service');
let ServiceController= {

CompareByPriceAssc:function(req,res){
console.log("Rendering....");

Service.find({}, [], {sort: {price: 1}},function(err, posts) {
				console.log("getting posts...")
				res.json( posts);
				console.log("Got posts !!")
				console.log(posts);
				});

// console.log("Rendered");
},

CompareByPriceDesc:function(req,res){
console.log("Rendering....");

Service.find({}, [], {sort: {price: -1}},function(err, posts) {
				res.json( posts);
				});

// console.log("Rendered");
}

}

module.exports = ServiceController;