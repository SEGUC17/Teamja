let work = require ('../Models/work');
let workController = {
	getallservices:function(req,res){

	work.find(function(err,Work){
	if (err)
	res.send(err.message);
	else 
	res.render('home',{Work});
	})
	},

getallcompanies:function(req,res){
var companyname = req.body.companynamerequested;
work.find ({Username:companyname}function(err,Work))
{if (err)
	res.send(err.message);
	else 
	res.render('home',{Work});
	})
	
}
}
 
}



