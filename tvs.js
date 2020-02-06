var express= require('express');
var app = express();
var bodyParser=require('body-parser');
var cors=require('cors');

var config=require('./config/config.json')
var jwt = require('jsonwebtoken');
var methodOverride = require('method-override');


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Accept");
  next();
});

app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));
app.use(methodOverride('_method'));


app.listen(config.PORT);

app.use(cors());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/v1', require('./routes'));