let BookingController = {
	  CreateBooking:function(req, res){
        let bookings = new  Bookings(req.body);
        let bookings.Username=req.session.Username;

bookings.save(function(err, bookings){
            if(err){
                res.send(err.message)
                console.log(err);
            }
            else{

res.render('sdsd');
                console.log(bookings);
                     }
        })
 }
,
ViewBookings:function(req,res)
{
 Bookings.find({UsernameCompany:req.session.UserName},function(err,Bookings){

 
     if(err)
                res.send(err.message);
            else
                res.render('index', {Bookings});



})},
}
module.exports=BookingController;