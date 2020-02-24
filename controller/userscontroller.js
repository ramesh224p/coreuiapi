var usersmodel = require('../model/usersmodel.js'),
    controllerUtil=require('../utils/controllerutils');

function userscontroller() {
    dum = new usersmodel();
    cuu = new controllerUtil();
}

userscontroller.prototype.getAll = function (req, res, next) {
    cuu.getAll(dum, req, res, next);
}

userscontroller.prototype.getById = function (req, res, next) {
    cuu.getById(dum, req, res, next);
}

userscontroller.prototype.create = function (req, res, next) {
    cuu.create(dum, req, res, next);
}

userscontroller.prototype.update = function (req, res, next) {
    cuu.update(dum, req, res, next);
}

userscontroller.prototype.remove = function (req, res, next) {
    cuu.remove(dum, req, res, next);
}

module.exports = userscontroller;