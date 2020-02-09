var usersmodel=require('../model/usersmodel.js');


function userscontroller(){
    dum=new usersmodel();
}

userscontroller.prototype.getAll=function(req, res){
    console.log(req)
    dum.getAll(req, res, function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]});
        } else {
            res.status(200).send({status:true, data:data});
        }
    })
}

userscontroller.prototype.getById=function(req, res){
    dum.getById(req.params.id, function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]});
        } else {
            res.status(200).send({status:true, data:data});
        }
    })
}


userscontroller.prototype.create=function(req, res){
    dum.create(req.body, function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]});
        } else {
            res.status(200).send({status:true, data:data});
        }
    })
}


userscontroller.prototype.update=function(req, res){
    dum.update(req.params.id, req.body, function(err, []){
        if(err){
            res.status(201).send({status:false,data:data});
        } else {
            res.status(200).send({status:true, data:data});
        }
    })
}


userscontroller.prototype.remove=function(req, res){
    console.log(req.params.id)
    dum.delete(req.params.id, function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]});
        } else {
            res.status(200).send({status:true, data:data});
        }
    })
}


module.exports=userscontroller;