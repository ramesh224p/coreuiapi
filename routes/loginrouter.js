var express= require('express');
var router= express.Router();
var controller=require('../controller/logincontroller.js');
var dc=new controller();

router.post('/', dc.create.bind(dc));


module.exports=router;