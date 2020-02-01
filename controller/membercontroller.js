var memberModel=require('../model/membermodel.js');

function memberController(){
    mm= new memberModel();
}

memberController.prototype.getById=function(req, res){
    mm.getById(req.params.id, function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]});
        } else {
            res.status(200).send({status:true,data:data});
        }
    })
}


module.exports=memberController;
