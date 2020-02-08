var cardimodel=require('../model/cardiomodel');

function cardiocontroller(){
    dcmm=new cardimodel();
}

cardiocontroller.prototype.getAll=function(req, res){
    console.log(req.query)
    console.log("allmodel")
    dcmm.getAll(req, function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]});
        } else {
            res.status(200).send({status:true,data:data});
        }
    })
}

cardiocontroller.prototype.getById=function(req, res){
    dcmm.getById(req.params.id, function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]});
        } else {
            res.status(200).send({status:true,data:data});
        }
    })
}

cardiocontroller.prototype.create=function(req, res){
    dcmm.create(req.body, function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]});
        } else {
            res.status(200).send({status:true,data:data});
        }
    })
}

cardiocontroller.prototype.update=function(req, res){
    dcmm.update(req.params.id, req.body, function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]});
        } else {
            res.status(200).send({status:true,data:data});
        }
    })
}

cardiocontroller.prototype.remove=function(req, res){
    dcmm.remove(req.body, function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]});
        } else {
            res.status(200).send({status:true,data:data});
        }
    })
}

module.exports=cardiocontroller;