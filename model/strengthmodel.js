var connection = require('../mysql/mysql.js');

function strengthModel() {
    this.mysql = connection;
}

strengthModel.prototype.getAll = function (callback) {
    this.mysql.query('SELECT * FROM strength', function (err, result) {
        callback(err, result);
    })
}

strengthModel.prototype.getById = function (id, callback) {
    this.mysql.query('SELECT * FROM strength WHERE id=' + id, function (err, result) {
        callback(err, result);
    })
}


strengthModel.prototype.create = function (data, callback) {
    console.log("strengthmodel")
    this.mysql.query('INSERT INTO strength SET?', data, function (err, result) {
        callback(err, result);
    })
}


strengthModel.prototype.update = function (id, data, callback) {
    this.mysql.query('UPATE strength SET? WHERE id=' + id, data, function (err, result) {
        callback(err, result);
    })
}

strengthModel.prototype.remove = function (id, callback) {
    this.mysql.query('DELETE FROM strength WHERE id=' + id, function (err, result) {
        callback(err, result);
    })
}

module.exports = strengthModel;