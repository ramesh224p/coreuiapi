function controllerutil() {

}

controllerutil.prototype.getAll=function(req, res, commanModel){
    commanModel.getAll(function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]});
        }else{
            res.status(201).send({status:true,data:data});
        }
    })
}

controllerutil.prototype.getById=function(req, res, commanModel){
    commanModel.getById(req.params.id, function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]});
        }else{
            res.status(201).send({status:true,data:data});
        }
    })
}

controllerutil.prototype.create=function(req, res, commanModel){
    commanModel.create(function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]});
        }else{
            res.status(201).send({status:true,data:data});
        }
    })
}

controllerutil.prototype.update=function(req, res, commanModel){
    commanModel.update(function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]});
        }else{
            res.status(201).send({status:true,data:data});
        }
    })
}

controllerutil.prototype.remove=function(req, res, commanModel){
    commanModel.remove(function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]});
        }else{
            res.status(201).send({status:true,data:data});
        }
    })
}

module.exports=controllerutil;