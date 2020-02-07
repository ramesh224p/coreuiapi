var connection = require('../mysql/mysql'),
     multer = require('multer');

function componentsStrengthmodel() {
    this.mysql = connection;
}

var storage = multer.diskStorage({ //multers disk storage settings
    destination: function (req, file, cb) {
        cb(null, './up/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

var upload = multer({ //multer settings
    storage: storage
}).single('file');

componentsStrengthmodel.prototype.create = function (req, res, callback) {
    upload(req, res, function (err) {
        if (err) {
            res.send({ status: false, err: err });
        } else {
            res.send({ status: true });
        }
    })
}

module.exports = componentsStrengthmodel;