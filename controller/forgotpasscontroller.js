var forgotpassmodel = require('../model/forgotpassmodel');


function forgotpasscontroller() {
    fpm = new forgotpassmodel();
}

forgotpasscontroller.prototype.getAll = function (req, res) {
    console.log(req.query)
    fpm.getAll(req.query.email, function (err, data) {
        if (err) {
            res.status(500).send({ status: false, data: [], err: err });
        } else if (Object.keys(data).length == 0) {
            res.status(201).send({ status: false, data: [] });
        } else {
            res.status(200).send({ status: true, data: data });
        }
    })
}


forgotpasscontroller.prototype.update = function (req, res) {
    console.log(req.body)
    fpm.update(req.params.id, req.body, function (err, data) {
        if (err) {
            res.status(201).send({ status: false, data: [] });
        } else {
            res.status(200).send({ status: true, data: data });
        }
    })
}

module.exports = forgotpasscontroller;