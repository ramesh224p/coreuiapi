var connection=require('../mysql/mysql'),
    fs=require('fs'),
    path=require('path'),
    base64ToImage = require('base64-to-image');
    
function base64model(){
    this.mysql=connection;
}


base64model.prototype.create=function(data, r, callback){
    let base64Str = data;
    var path ='./up/';
    var filename='image.jpeg';


   // base64ToImage(base64Str,path,filename),

   // imageInfo = base64ToImage(base64Str, path, filename);

    function base64ToImage(base64str, path, filename){
        //console.log(base64str)       
        fs.writeFile(path + filename, base64str, function(err) {
            console.log('err',err)
            if(err){
                r.send({status:false,err:err});
            }else{
                r.json({status:true,some:""});
                return;
            }
        });
        
    }

}

module.exports=base64model;





    