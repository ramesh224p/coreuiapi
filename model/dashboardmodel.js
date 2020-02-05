var connection=require('../mysql/mysql.js');

function dashboardmodel(){
    this.mysql= connection;
}

dashboardmodel.prototype.get=function(callback){
    this.mysql.query('SELECT * FROM emp',function(err, result){
        callback(err, result);
    })
}

module.exports=dashboardmodel;