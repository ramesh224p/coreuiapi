var asynModel=require('../model/asynmodel');

function asynController(){
    var asm= new asynModel;
}

asynController.prototype.getAll=function(req, res){
    asm.getAll(function(err, data){
        if(err){
            res.status(201).send({status:false, data:[]})
        } else{
            res.status(200).send({status:true,data:data})
        }
    })
}

asynController.prototype.getById=function(req, res){
    asm.getById(function(err, data){
        if(err){
            res.status(201).send({status:false, data:[]})
        } else{
            res.status(200).send({status:true,data:data})
        }
    })
}

asynController.prototype.create=function(req, res){
    asm.create(function(err, data){
        if(err){
            res.status(201).send({status:false, data:[]})
        } else{
            res.status(200).send({status:true,data:data})
        }
    })
}

asynController.prototype.update=function(req, res){
    asm.update(function(err, data){
        if(err){
            res.status(201).send({status:false, data:[]})
        } else{
            res.status(200).send({status:true,data:data})
        }
    })
}

asynController.prototype.remove=function(req, res){
    asm.remove(function(err, data){
        if(err){
            res.status(201).send({status:false, data:[]})
        } else{
            res.status(200).send({status:true,data:data})
        }
    })
}