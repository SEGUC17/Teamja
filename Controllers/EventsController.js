let events = require ('../models/events');
let EventsController={
	getAllEvents :function (req,res){
		events.find(function(err,eventArrays){
			if (err) res.send(err.message);
			else res.render('events', {eventArrays});
		
	})
}}

module.exports = EventsController;