//require depenciess

var express = require('express');
var router = require('./app/routes');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var DB_URI = "mongodb://localhost:27017/portfolio";
var Session = require('express-session');
var app = express();
 

app.use(bodyParser.json());

app.use( express.static(__dirname + "/public" ));
app.use('/node_modules', express.static(__dirname + "/node_modules"));



app.get('/', function(req, res){
    res.sendfile('index.html');
});


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


mongoose.connect(DB_URI);
app.use(Session({secret: 'mySecretKey'}));

app.use(router);


app.listen(8080, function(){
    console.log("server is listening on port 8080");
})
