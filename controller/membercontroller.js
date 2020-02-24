var memberModel = require('../model/membermodel.js'),
    controllerUtil=require('../utils/controllerutils');

function memberController() {
    mm = new memberModel();
    cuu = new controllerUtil();
}

memberController.prototype.getById = function (req, res, next) {
    cuu.getById(mm, req, res, next);
}


module.exports = memberController;
