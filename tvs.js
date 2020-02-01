var express= require('express');
var app = express();
var bodyParser=require('body-parser');
var cors=require('cors');
var config=require('./config/config.json')
var jwt = require('jsonwebtoken');

app.use(function(req, res, next){
    res.header('Acess-Control-Allow-Origin','*');
    res.header('Acess-Control-Allow-Method','GET, PUT, POST, DELETE');
    res.header('Acess-Control-Allow-Headers','Content-Type,Accept');
    next();
});

app.listen(config.PORT);

app.use(cors());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/v1', require('./routes'));