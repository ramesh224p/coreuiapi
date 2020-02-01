var connection=require('../mysql/mysql.js');

function usersmodel(){
    this.mysql=connection;
}

usersmodel.prototype.get=function(callback){
    console.log("usermodel")
    this.mysql.query('select * from emp',function(err, result){
        console.log(err, result);
        callback(err, result);
    })
}

module.exports=usersmodel;