var express = require("express");
var path = require("path");
var app = express();
// var hostName = 'localhost';
var hostName = '192.168.1.13';
var port = 1234;

app.use(express.static(path.join(__dirname, 'src')));

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.get("/",function(req,res){
    res.render('index');
});

app.listen(port,hostName,function(){
   console.log(`服务器运行在http://${hostName}:${port}`);
});
