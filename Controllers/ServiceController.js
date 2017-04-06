let Service = require ('../models/service');
let ServiceController= {
CompareByPriceAssc:function(req,res){
Service.find().sort({price: 1}).find(function (err, posts) {
if (err) res.send(err.message);
else res.render('service',{posts});
    // user posts array
})
}}

module.exports = ServiceController;