var connection=require('../mysql/mysql.js');

function usersmodel(){
    this.mysql=connection;
}

usersmodel.prototype.getAll=function(request, response, callback){
    console.log("usermodel")
    var sql = 'select * from emp ';
    console.log(request.query)
    if(request.query.startdate && request.query.enddate) {
        sql=sql+'WHERE date_created >="'+request.query.startdate+'" AND date_created<="'+request.query.enddate+'"';
    }
    this.mysql.query(sql,function(err, result){        
        callback(err, result);
    })
}

usersmodel.prototype.getById=function(id, callback){
    this.mysql.query('select * from emp where id='+id,function(err, result){
        console.log(err, result);
        callback(err, result);
    })
}

usersmodel.prototype.create=function(data, callback){
      this.mysql.query('insert into emp set?',data,function(err, result){
        console.log(err, result);
        callback(err, result);
    })
}

usersmodel.prototype.update=function(id, data, callback){
    this.mysql.query('update emp set? where id='+id, data, function(err, result){
        console.log(err, result);
        callback(err, result);
    })
}

usersmodel.prototype.delete=function(id, callback){
    this.mysql.query('delete from emp where id='+id,function(err, result){
        callback(err, result);
    })
}

module.exports=usersmodel;