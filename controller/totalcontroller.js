var totalModel=require('../model/totalmodel.js');

function totalController(){
    tm= new totalModel();
}

totalController.prototype.get=function(req, res){
    tm.get(function(err, data){
        if(err){
            res.status(201).send({status:201,data:[]});
        } else{
            res.status(200).send({status:true,data:data});
        }
    })
}

module.exports=totalController;