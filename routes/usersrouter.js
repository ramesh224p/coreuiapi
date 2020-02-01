var express= require('express');
var router=express.Router();
var userscontroller=require('../controller/userscontroller.js');
var duc=new userscontroller();

router.get('', duc.get.bind(duc));

module.exports=router;