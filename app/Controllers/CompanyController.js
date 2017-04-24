let Company = require('../Models/Company');

let CompanyController = {



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