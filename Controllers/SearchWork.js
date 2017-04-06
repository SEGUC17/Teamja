let work = require ('../Models/work');
Let workController = {
	search:function (req,res){
	Work.findOne(({Title:req.body.title}),function(err.work)){
	if (err)
	res.send(err.message);
	else
	res.render('mariam',{work})
	});
	}
}
module.exports=workController;