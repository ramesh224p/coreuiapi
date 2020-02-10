var cardimodel=require('../model/totalusersmodel');

function totaluserscontroller(){
    dcmm=new cardimodel();
}

totaluserscontroller.prototype.getAll=function(req, res){
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

totaluserscontroller.prototype.getById=function(req, res){
    dcmm.getById(req.params.id, function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]});
        } else {
            res.status(200).send({status:true,data:data});
        }
    })
}

totaluserscontroller.prototype.create=function(req, res){
    dcmm.create(req.body, function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]});
        } else {
            res.status(200).send({status:true,data:data});
        }
    })
}

totaluserscontroller.prototype.update=function(req, res){
    dcmm.update(req.params.id, req.body, function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]});
        } else {
            res.status(200).send({status:true,data:data});
        }
    })
}

totaluserscontroller.prototype.remove=function(req, res){
    dcmm.remove(req.body, function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]});
        } else {
            res.status(200).send({status:true,data:data});
        }
    })
}

module.exports=totaluserscontroller;