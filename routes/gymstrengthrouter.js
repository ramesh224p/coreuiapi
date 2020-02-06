var express=require('express');
var router=express.Router();
var componentsStrengthcontroller=require('../controller/gymStrengthcontroller.js');

var csc= new componentsStrengthcontroller();

router.post('/', csc.create.bind(csc));

module.exports=router;