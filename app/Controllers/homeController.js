
let company = require('../Models/company');
let work = require('../Models/work');

let homeController = {

    search1:function(req, res){
    	console.log("ana fel search");

    	if(req.query.search){
            console.error();

    		company.findone({Username: new RegExp('^'+req.query.search+'$', "i")}, function(err, searchresults){
  				 if(err){
	                console.error();
	                res.send(err.message);
	            }
	            else
	            	
	                res.json({searchresults, pagetitle: "Home", user : req.user, search: req.query.search});
			});

    	} else{

    		console.log("no search");

	         User.find(function(err, searchresults) {
  				 if(err)
	                res.send(err.message);
	            else
	            	
	               	res.json({searchresults, pagetitle: "Home", user : req.user,search: req.query.search});
			});

    	}
    }
}


module.exports = homeController;