var express= require('express');
var router=express.Router();
var dashboardcontroller=require('../controller/dashboardcontroller.js');
var dcr=new dashboardcontroller();


router.get('/', dcr.get.bind(dcr));

module.exports=router;