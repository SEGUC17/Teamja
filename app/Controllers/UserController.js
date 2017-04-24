let User= require('../Models/User');

let UserController = {



login:function(req,res){
var Username = req.body.Username;
var  Password =req.body.Password;

 User.findOne({Username:Username,Password:Password},function(err,User){
     if(!User){
     
              return console.log('you are not athorized ');
res.status(500).send(errorMsg);

                ;}
            else{
                res.json(User);
                req.session.Username= Username;
                console.log(req.session.Username);
        
            }
        })
 }
,

    createUser:function(req, res){
        let user = new  User(req.body);

   user.save(function(err, User){
            if(err){
                res.send(err.message)
                console.log(err);
            }
            else{
req.session.Usernasme= req.body.Username;

                console.log(User);
                
            }
        })
    }
}

module.exports = UserController;