let Company = require('../Models/Company');

let CompanyController = {



login:function(req,res){
var Username = req.body.Username;
var  password =req.body.password;

 Company.findOne({Username:Username,password:password},function(err,Company){
     if(!Company){
        console.log('hko');
                res.send('you are not athorized ')

                ;}
            else{
                req.session.Username= Username;
               res.redirect('');
            }
        })
 }
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
res.render('work');
                console.log(company);
                
            }
        })
    }
}

module.exports = CompanyController;