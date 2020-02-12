var uploadmodel=require('../model/uploadmodel');

function uploadcontroller(){
    csm= new uploadmodel();
}

uploadcontroller.prototype.create=function(req, res){
    csm.create(req,res, function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]});
        } else {
            res.status(200).send({status:true,data:data});
        }
    })
}

module.exports=uploadcontroller;