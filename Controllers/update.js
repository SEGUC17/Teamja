let Work = require('../Models/testdb');

let update = {

theupdate:function(req, res){
    console.log('theupdatefunctionshaghala');

    var thetitle="hiii";
	    // the schema
	    var title = req.body.title;
	    var VideoURL= req.body.VideoURL;
	    var price=req.body.price;
		    Work.find({title:thetitle}, function (err, testing) {
	        //update it
	        if (err){
	        	 return console.error(err);
	        }
	        else{
	          Work.update({
	            title:title,
	            VideoURL:VideoURL,
	            price:price
	        });
	    }
	                  console.log('updated' + Work._id);
	    });
 res.redirect('/page');
	
}
}

/*router.post('/',function(req, res) {
	    
	    var thetitle="hiii";
	    // the schema
	    var title = req.body.title;
	    var VideoURL= req.body.VideoURL;
	    var price=req.body.price;

	    //find the document by ID
	    test.find({title:thetitle}, function (err, testing) {
	        //update it
	        if (err){
	        	 return console.error(err);
	        }
	        else{
	          test.update({
	            title:title,
	            VideoURL:VideoURL,
	            price:price
	        });
	    }
	                  console.log('updated' + test._id);
	    });
 res.redirect('/page');
	});
	
*/	
module.exports = update;