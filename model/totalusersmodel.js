var connection = require('../mysql/mysql');

function totalusersmodel() {
    this.mysql = connection;
}

totalusersmodel.prototype.getAll = function (request, callback) {
    console.log("usermodel")
    var sql = 'select * from emp where status=' + 1;
    console.log(request.query)
    if (request.query.startdate && request.query.enddate) {
        sql = sql + ' and  date_created >="' + request.query.startdate + '" AND date_created<="' + request.query.enddate + '"';
    }
    if (request.query.zerostatus) {
        sql = sql + ' or  status="' + request.query.zerostatus + '"';
    }
    console.log(sql)
    this.mysql.query(sql, function (err, result) {
        callback(err, result);
    })
}

totalusersmodel.prototype.getById = function (id, callback) {
    console.log("idmethod")
    this.mysql.query('select * from emp where id=' + id, function (err, result) {
        callback(err, result)
    })
}

totalusersmodel.prototype.create = function (data, callback) {
    this.mysql.query('insert into emp set?', data, function (err, result) {
        callback(err, result)
    })
}
totalusersmodel.prototype.update = function (id, data, callback) {
    this.mysql.query('update emp set? where id=' + id, data, function (err, result) {
        callback(err, result)
    })
}
totalusersmodel.prototype.remove = function (id, callback) {
    this.mysql.query('delete from emp where id=' + id, function (err, result) {
        callback(err, result)
    })
}

module.exports = totalusersmodel;