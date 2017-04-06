let Company = require('../Model/company');

let CompanyController = {
	search:function (req,res){
	console.log('ana dakhalttttt');
	Company.find(({UserName:req.body.UserName}),function(err,search){
	if (err)
	res.send(err.message);
	else
	res.render('trial');
	});
	}

}
module.exports=CompanyController;