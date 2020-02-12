var pedicureModel=require('../model/pedicuremodel');

function pedicureController(){
    pm= new pedicureModel();
}

pedicureController.prototype.getAll=function(req, res){
    pm.getAll(function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]});
        } else {
            res.status(200).send({status:true,data:data});
        }
    })
}

pedicureController.prototype.getById=function(req, res){
    pm.getById(req.params.id, function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]});
        } else {
            res.status(200).send({status:true,data:data});
        }
    })
}


pedicureController.prototype.create=function(req, res){
    pm.create(req.body, function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]});
        } else {
            res.status(200).send({status:true,data:data});
        }
    })
}


pedicureController.prototype.update=function(req, res){
    pm.update(req.params.id, req.body, function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]});
        } else {
            res.status(200).send({status:true,data:data});
        }
    })
}


pedicureController.prototype.remove=function(req, res){
    pm.remove(req.params.id, function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]});
        } else {
            res.status(200).send({status:true,data:data});
        }
    })
}


module.exports=pedicureController;