var connection=require('../mysql/mysql'),
    async = require("async");


function asynModel(){
    this.mysql=connection;
}

async.series([
  function(callback) {
    setTimeout(function() {
      console.log('Task One');
      callback(null, "hi this is ");
    }, 200);
  },
  function(callback) {
    setTimeout(function() {
      console.log('Task Two');
      callback(null, "SOPME ");
    }, 100);
  }
],
function(err, results) {
  console.log(results);
  // the results array will equal [1, 2] even though
  // the second function had a shorter timeout.
});

module.exports=asynModel;