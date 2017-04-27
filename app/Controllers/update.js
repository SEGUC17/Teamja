let Work = require('../Models/Work');

let update = {

theupdate:function(req, res){
    console.log('theupdatefunctionshaghala');

  

      var id = req.params.id;
     
       console.log(id);
	  
	    var title = req.body.Title;
	    var VideoURL= req.body.VideoURL;
	    var price=req.body.Price;
	    
		    Work.findByIdAndUpdate(id,{Title:title,VideoURL:VideoURL,Price:price} ,function (err, Work) {
	     
	        if (err){
	        	 return console.error(err);
	        }
	        
	                  console.log('updated');
	    });

	
}
}

module.exports = update;