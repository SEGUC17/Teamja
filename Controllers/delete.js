let Work = require('../Models/testdb');

let deletefunc = {

thedelete:function(req, res){
    console.log('thedeletefunctionshaghala');

	  var thetitle="hiii";

	    Work.find({title:thetitle}, function (err,testing) {
	        if (err) {
	            return console.error(err);
	        } else {
	            //remove it from Mongo
	            Work.remove(function (err, testing) {
	                if (err) {
	                    return console.error(err);
	                } else {
	                    //Returning success messages saying it was deleted
	                    console.log('DELETE removing ID: ' + Work._id);


	                    
	                }
	            });
	        }
	    });
	    res.redirect('/page');

	
}
}

/*
router.post('/', function (req, res) {
	  
	  var thetitle="hiii";

	    test.find({title:thetitle}, function (err,testing) {
	        if (err) {
	            return console.error(err);
	        } else {
	            //remove it from Mongo
	            test.remove(function (err, testing) {
	                if (err) {
	                    return console.error(err);
	                } else {
	                    //Returning success messages saying it was deleted
	                    console.log('DELETE removing ID: ' + test._id);


	                    
	                }
	            });
	        }
	    });
	    res.redirect('/page');

});*/

module.exports = deletefunc;