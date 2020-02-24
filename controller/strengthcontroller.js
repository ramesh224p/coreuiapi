var strengthModel = require('../model/strengthmodel'),
    controllerUtil=require('../utils/controllerutils');

function strengthController() {
    tm = new strengthModel();
    cuu = new controllerUtil();
}

strengthController.prototype.getAll = function (req, res, next) {
    cuu.getAll(tm, req, res, next);
}

strengthController.prototype.getById = function (req, res, next) {
    cuu.getById(tm, req, res, next);
}

strengthController.prototype.create = function (req, res, next) {
    cuu.create(tm, req, res, next);
}

strengthController.prototype.update = function (req, res, next) {
    cuu.update(tm, req, res, next);
}

strengthController.prototype.remove = function (req, res, next) {
    cuu.remove(tm, req, res, next);
}

module.exports = strengthController;