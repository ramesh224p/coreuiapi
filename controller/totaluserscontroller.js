var cardimodel = require('../model/totalusersmodel'),
    controllerUtil=require('../utils/controllerutils');

function totaluserscontroller() {
    dcmm = new cardimodel();
    cuu = new controllerUtil();
}

totaluserscontroller.prototype.getAll = function (req, res, next) {
    dcmm.getAll(req, function(err, data){
        if(err){
            res.status(201).send({status:false,data:[]});
        }else{
            res.status(200).send({status:true,data:data});
        }
    })
}

totaluserscontroller.prototype.getById = function (req, res, next) {
    cuu.getById(dcmm, req, res, next);
}

totaluserscontroller.prototype.create = function (req, res, next) {
    cuu.create(dcmm, req, res, next);
}

totaluserscontroller.prototype.update = function (req, res, next) {
    cuu.update(dcmm, req, res, next);
}

totaluserscontroller.prototype.remove = function (req, res, next) {
    cuu.remove(dcmm, req, res, next);
}

module.exports = totaluserscontroller;