var dashboardmodel= require('../model/dashboardmodel.js');

function dashboardcontroller() {
    dm=new dashboardmodel();
}

dashboardcontroller.prototype.get=function(req, res){
    dm.get(function(err, data){
        if(err){
            res.status(201).send({status:false, data:[]});
        } else {
            res.status(200).send({status:true,data:data})
        }
    })

}

module.exports=dashboardcontroller;