var express = require('express');
var router = require('./app/routes');
var bodyParser = require('body-parser');
var passport = require('passport');
var flash    = require('connect-flash');
//var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var session      = require('express-session');


var mongoose = require('mongoose');
var DB_URI = "mongodb://localhost:27017/portfolio";

var app = express();



app.set('view engine', 'ejs');

// Configure app
//app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname+ '/public'));

// Required for Passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch', cookie: { maxAge: 60000 }})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

//require('./app/routes.js')(app, passport);
//require('./config/passport')(passport);

mongoose.connect(DB_URI);
// app.use(router);


// Start the server
app.listen(3000, function(){
    console.log("Magic happens on port 3000");
})