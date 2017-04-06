var express=require('express');
var path=require('path');
var bodyParser= require('body-parser');
var url="mongodb://localhost/database";
var mongoose = require('mongoose');
var router = require('./Routes/routes');

var app=express();

//the view
app.set('view engine','ejs');
app.set('Views',path.join(__dirname, 'Views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


mongoose.connect(url);

app.use(router);


app.listen(3000,function(){
console.log('Server Started')
  });