var connection=require('../mysql/mysql.js');

function memberModel(){
    this.mysql=connection;
}

memberModel.prototype.getById=function(id,callback){
    this.mysql.query('SELECT * FROM emp where id='+id,function(err, result){
        callback(err, result);
    })
}
module.exports=memberModel;