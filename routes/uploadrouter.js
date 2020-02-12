var express=require('express'),
    router=express.Router(),
    uploadcontroller=require('../controller/uploadcontroller'),

    csc= new uploadcontroller();

router.post('/', csc.create.bind(csc));

module.exports=router;