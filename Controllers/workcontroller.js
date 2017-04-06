let work = require ('../models/Work');
Let workController = {
	search:function (req,res){
	Work.findone(({Title:req.body.title}),function(err.search)){
	if (err)
	res.send(err.message);
	else
	res.render('mariam',{search})
	});
	}
}
module.exports=workController;