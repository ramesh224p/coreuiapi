var express=require('express');
var router=express.Router();
var totalController=require('../controller/totalcontroller.js');

var tc = new totalController();

router.get('/', tc.get.bind(tc));

module.exports=router;
