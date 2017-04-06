let work = require ('../model/work');
let workController = {
	getallservices:function(req,res){

	work.find(function(err,projects){
	if (err)
	res.send(err.message);
	else 
	res.render('home',{projects});
	})
	},

getallcompanies:function(req,res){
var companyname = req.body.companynamerequested;
work.find ({Username:companyname}function(err,projects))
{if (err)
	res.send(err.message);
	else 
	res.render('home',{projects});
	})
	
}
}
 
}


