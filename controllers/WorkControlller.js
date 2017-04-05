let Work = require ('../model/service');
let WorkController= {
CompareByPriceAssc:function(req,res){
work.find().sort({price: 1}).find(function (err, posts) ){
if (err) res.send.(err.message);
else res.render('/service',{posts});
    // user posts array
})
}}

