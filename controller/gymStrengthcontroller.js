var componentsStrengthmodel=require('../model/gymStrengthmodel.js');

function componentsStrengthcontroller(){
    csm= new componentsStrengthmodel();
}

componentsStrengthcontroller.prototype.create=function(req, res){
    csm.create(req.body, function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]});
        } else {
            res.status(200).send({status:true,data:data});
        }
    })
}

module.exports=componentsStrengthcontroller;