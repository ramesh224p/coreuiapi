var strengthModel=require('../model/strengthmodel');

function strengthController(){
    tm= new strengthModel();
}

strengthController.prototype.getAll=function(req, res){
    tm.getAll(function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]});
        } else{
            res.status(200).send({status:true,data:data});
        }
    })
}

strengthController.prototype.getById=function(req, res){
    tm.getById(req.params.id, function(err, data){
        if(err){
            res.status(201).send({status:201,data:[]});
        } else{
            res.status(200).send({status:true,data:data});
        }
    })
}

strengthController.prototype.create=function(req, res){
    console.log("strengthcontrol");
    console.log(req.body)
    tm.create(req.body, function(err, data){
        if(err){
            res.status(201).send({status:201,data:[]});
        } else{
            res.status(200).send({status:true,data:data});
        }
    })
}

strengthController.prototype.update=function(req, res){
    tm.update(req.params.id, req.body, function(err, data){
        if(err){
            res.status(201).send({status:201,data:[]});
        } else{
            res.status(200).send({status:true,data:data});
        }
    })
}

strengthController.prototype.remove=function(req, res){
    tm.remove(req.params.id, function(err, data){
        if(err){
            res.status(201).send({status:201,data:[]});
        } else{
            res.status(200).send({status:true,data:data});
        }
    })
}

module.exports=strengthController;