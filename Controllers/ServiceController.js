var Service = require ('../models/service');
let ServiceController= {

CompareByPriceAssc:function(req,res){
console.log("Rendering....");

Service.find({}, [], {sort: {price: -1}},function(err, posts) {
				res.render('service',{posts: posts});
				});

// console.log("Rendered");
}}

module.exports = ServiceController;