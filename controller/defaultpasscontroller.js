var defaultpassmodel = require('../model/defaultpassmodel');

function defaultpasscontroller() {
    dpmm = new defaultpassmodel();
}

defaultpasscontroller.prototype.update = function (req, res) {
    console.log(req.body)
    dpmm.update(req.params.id, req.body, function (err, data) {
        if (err) {
            res.status(201).send({ status: false, data: [] });
        } else {
            res.status(200).send({ status: true, data: data });
        }
    })
}

module.exports = defaultpasscontroller;