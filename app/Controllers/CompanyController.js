let Company = require('../Models/Company');
let Work = require('../Models/Work');

let CompanyController = {







Change:function(req, res){


  

   var x=req.params.Username;

     

     var image =req.body.Image;
        
     Company.findOneAndUpdate({Username:x},{Image:image} ,function (err, Work) {
         
            if (err){
                 return console.error(err);
            }
            
        });

    
}
,


Search:function(req,res){

User=req.body.User;


 Company.findOne({Username:User},function(err,Company){
     if(!Company){
     
  
res.status(500).send(errorMsg);

                ;}
            else{
              console.log(Company);
                res.json(Company);
          
        
            }
        })



}

,



 search1:function(req, res){
        console.log("ana fel search");

        if(req.query.search){
            console.error();

            company.findone({Username: new RegExp('^'+req.query.search+'$', "i")}, function(err, searchresults){
                 if(err){
                    console.error();
                    res.send(err.message);
                }
                else{
                    console.log(searchresults);
                    res.json({searchresults, pagetitle: "Home", user : req.user, search: req.query.search});}
            });

        } else{

            console.log("no search");

          Work.find(function(err, searchresults) {
                 if(err)
                    res.send(err.message);
                else{
                       console.log(searchresults);
                    res.json({searchresults, pagetitle: "Home", user : req.user,search: req.query.search});}
            });

        }
    },

login:function(req,res){
var Username = req.body.Username;
var  Password =req.body.Password;

 Company.findOne({Username:Username,Password:Password},function(err,Company){
     if(!Company){
     
              return console.log('you are not athorized ');
res.status(500).send(errorMsg);

                ;}
            else{
                res.json(Company);
                req.session.Username= Username;
                console.log(req.session.Username);
        
            }
        })
 }
,
profile:function(req,res){
 var x=req.params.Username;


 Company.findOne({Username:x},function(err,company){
     if(!Company){
     
              return res.status(500).send(errorMsg);

                }
            else{
        
                res.json(company);
             
        
            }
                })}



,


    createCompany:function(req, res){
        let company = new  Company(req.body);

   company.save(function(err, company){
            if(err){
                res.send(err.message)
                console.log(err);
            }
            else{
req.session.Username= req.body.Username;

                console.log(company);
                
            }
        })
    }
}

module.exports = CompanyController;