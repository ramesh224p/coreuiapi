var connection=require('../mysql/mysql.js');

function pedicureModel(){
    this.mysql=connection;
}

pedicureModel.prototype.getAll=function(callback){
    this.mysql.query('SELECT * FROM pedicure',function(err, result){
        callback(err, result);
    })
}

pedicureModel.prototype.getById=function(id, callback){
    this.mysql.query('SELECT * FROM pedicure WHERE id='+id,function(err, result){
        callback(err, result);
    })
}

pedicureModel.prototype.create=function(data, callback){
    this.mysql.query('INSERT INTO pedicure SET?',data,function(err, result){
        callback(err, result);
    })
}

pedicureModel.prototype.update=function(id, data, callback){
    this.mysql.query('UPDATE pedicure SET? WHERE id='+id, data, function(err, result){
        callback(err, result);
    })
}

pedicureModel.prototype.remove=function(id, callback){
    this.mysql.query('DELETE FROM pedicure WHERE id='+id,function(err, result){
        callback(err, result);
    })
}

module.exports=pedicureModel;