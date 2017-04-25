let Work = require('../Models/Work');

let deletefunc = {

thedelete:function(req, res){
    console.log('thedeletefunctionshaghala');


   var id = req.params.id;

	    Work.findOneAndRemove(id, function (err,Work) {
	        if (err) {
	            return console.error(err);
	        }     
	            });
	    	
	        }
	    }


module.exports = deletefunc;