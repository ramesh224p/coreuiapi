var base64model=require('../model/base64model');

function base64controller (){
    b64m=new base64model();
}

base64controller.prototype.create=function(req, res){
    console.log("came")
    console.log(req.body)
    b64m.create(req.body, res, function(err){
        if(err){
            console.log(err);
        }
    });
}

module.exports=base64controller;