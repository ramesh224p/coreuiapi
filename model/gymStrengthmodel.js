var connection= require('../mysql/mysql.js');

function componentsStrengthmodel(){
    this.mysql=connection;
}

componentsStrengthmodel.prototype.create=function(data, callback){
    this.mysql.query('INSERT INTO emp SET?'+data,function(err, result){
        callback(err, result);
    })
}

module.exports=componentsStrengthmodel;