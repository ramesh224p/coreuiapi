var connection=require('../mysql/mysql.js');

function playModel(){
    this.mysql=connection;
}

playModel.prototype.get=function(callback){
    this.mysql.query('SELECT * FROM emp',function(err, result){
        callback(err, result);
    })
}

module.exports=playModel;