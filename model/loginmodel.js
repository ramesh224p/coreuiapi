var connection=require('../mysql/mysql.js')


function model(){
    this.mysql=connection;
}

model.prototype.create=function(name, password, callback){
    console.log("model");
   console.log(name, password)
    this.mysql.query('SELECT * FROM emp WHERE email="'+name+ '"AND password="' +password+'"', function(err, result){
        console.log(result);
        callback(err, result);
    })
}

module.exports=model;