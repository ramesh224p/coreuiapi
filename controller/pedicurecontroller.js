var pedicureModel = require('../model/pedicuremodel'),
    controllerUtil=require('../utils/controllerutils');

function pedicureController() {
    pm = new pedicureModel();
    cuu = new controllerUtil();
}

pedicureController.prototype.getAll = function (req, res, next) {
    cuu.getAll(pm, req, res, next);
}

pedicureController.prototype.getById = function (req, res, next) {
    cuu.getById(pm, req, res, next);
}


pedicureController.prototype.create = function (req, res, next) {
    cuu.create(pm, req, res, next);
}


pedicureController.prototype.update = function (req, res, next) {
    cuu.update(pm, req, res, next);
}


pedicureController.prototype.remove = function (req, res, next) {
    cuu.remove(pm, req, res, next);
}


module.exports = pedicureController;