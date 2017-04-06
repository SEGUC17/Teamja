let Work = require('../Models/Work');

let WorkController = {
    
    getAllWork:function(req, res){
        
        Work.find(function(err, work){
            
            if(err)
                res.send(err.message);
            
               // res.render('home', {work});
        })
    },

    getCompanyWork:function (req,res){
     
var User= req.session.Username;

 Work.find({Username:User},function(err, work){
            
            if(err)
                res.send(err.message);
            else
                res.render('index', {work});
        })},


    
getWorkDetails:function(req, res){

    var x= req.body.WorkTitle;
    var User=req.session.Username;
 Work.findOne( {Username:User},function(err, work){
            
            if(err)
                res.send(err.message);
            else
                res.render('lese view ', {work});
        })},

    /*AddRates:function (req,res){
        var title= req.body.title;
    var work=    Work.findOne( title:}
    {
     work.rates.push(req.body.rates);
        })},

    }
*/

 createWork:function(req, res){
       let   trial = new  Work();
        trial.Username= req.session.Username;
        trial.VideoURl= req.body.VideoURl;
       trial.price=req.body.price;
        trial.title= req.body.title
   // trial.img.data = fs.readFileSync(req.files.userPhoto.path)
 console.log(req.body.Username);


   trial.save(function(err, company){
            if(err){
                res.send(err.message)
                console.log(err);
            }
           else{

                console.log(trial.Username);
                
               
            }
               console.log(trial.Username);
        })
    }
}


module.exports = WorkController;