let Company = require('../Models/company');

let CompanyController = {
	search:function (req,res){
	
	Company.findOne(({UserName:req.body.UserName}),function(err,Company){

	if (err)
	res.send(err.message);
	else
		
	res.render('trial',{Company});
	


})}


	
	}


module.exports=CompanyController;