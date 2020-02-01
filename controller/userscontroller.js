var usersmodel=require('../model/usersmodel.js');


function userscontroller(){
    dum=new usersmodel();
}

userscontroller.prototype.get=function(req, res){
    console.log("userallctrl")
    dum.get(function(err, data){
        if(err){
            res.status(201).send({status:false,data:data});
        } else {
            res.status(200).send({status:true, data:data});
        }
    })
}

module.exports=userscontroller;