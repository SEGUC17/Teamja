//require depenciess

var express = require('express');
var router = require('./app/routes');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var DB_URI = "mongodb://localhost:27017/portfolio";
var session = require('express-session');
//var fs = require('file-system');
var app = express();
//var multer = require('multer');
//var upload = multer(); 

app.use(bodyParser.json());

app.use( express.static(__dirname + "/public" ));
app.use('/node_modules', express.static(__dirname + "/node_modules"));



app.get('/', function(req, res){
    res.sendfile('index.html');
});
//app.use('/node_modules', express.static(__dirname + "/node_modules"));
//app.use('/public/controllers', express.static(__dirname + "/public/controllers" ));


//app.use('/uploads', express.static(__dirname + "/uploads"));
// configure app
app.use(bodyParser.urlencoded({extended:true}));


mongoose.connect(DB_URI);
app.use(session({secret: 'mySecretKey'}));

app.use(router);

/*app.use(multer({ dest: './images'}),
 rename: function (fieldname, filename) {
   return filename;
 },*/

// start the server
app.listen(8080, function(){
    console.log("server is listening on port 8080");
})
