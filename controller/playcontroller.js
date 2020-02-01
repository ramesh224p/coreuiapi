var playModel=require('../model/playmodel.js');

function playController(){
    pm= new playModel();
}

playController.prototype.get=function(req, res){
    pm.get(function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]});
        } else {
            res.status(200).send({status:true,data:data});
        }
    })
}

module.exports=playController;