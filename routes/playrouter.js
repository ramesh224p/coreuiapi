var express=require('express');
var router=express.Router();
var playController=require('../controller/playcontroller.js');

var pr= new playController();

router.get('/', pr.get.bind(pr));

module.exports=router;