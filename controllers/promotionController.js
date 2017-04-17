var promotion = require('../models/promotion');
 let Company = require('../models/Company');
let promotionController = {



 createPromotion:function(req, res){
       let   trial = new  promotion();
       User= req.session.Username;
       trial.Username= req.session.Username;
         trial.Title= req.body.title;

   // trial.img.data = fs.readFileSync(req.files.userPhoto.path)


Company.findOne( {Username:User},function(err, company){
            trial.Company_id=company.id;
         
      


              trial.save(function(err, promotion){
            if(err){
                res.send(err.message)
                console.log(err);
            }
           else{
      console.log(trial);
          
	    req.flash('success_msg', 'You added a new promotion');
		res.redirect('/getall'); 
                
               
            }
              
        })   });
    },
/*
createPromotion:function(req, res){
    console.log('dakhalt el add promotion');
	var username = req.session.Username;
	var title = req.body.title;
 var id=0;
Company.findOne( {Username:username},function(err, company){
          var id=company.id;

            });
               
		var errors = req.validationErrors();
		if(errors){
		res.render('index',{
			errors:errors
		});
	} else {
		var newPromotion = new promotion({
			title: title,
			UserName: username,
			Company_id:id,

		});
		console.log(newPromotion);

		req.flash('success_msg', 'You added a new promotion');
		res.redirect('/getall'); 
    }
},*/
getAllPromotions :function (req,res){
		promotion.find().sort({title: 1}).find(function(err,promotionArrays){
			console.log(promotionArrays);
			if (err) res.send(err.message);
			else res.render('promotion', {promotionArrays});

		
	})
}


}

module.exports = promotionController;