var connection=require('../mysql/mysql.js');

function totalModel(){
    this.mysql=connection;
}

totalModel.prototype.get=function(callback){
    this.mysql.query('SELECT * FROM emp',function(err, result){
        callback(err, result);
    })
}

module.exports=totalModel;