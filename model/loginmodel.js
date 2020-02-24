var connection = require('../mysql/mysql.js'),
    md5 = require('md5');

function model() {
    this.mysql = connection;
}

model.prototype.create = function (name, password, callback) {
    this.mysql.query('SELECT * FROM emp WHERE email="' + name + '"AND password="' + md5(password) + '"', function (err, result) {
        callback(err, result);
    })
}

module.exports = model;