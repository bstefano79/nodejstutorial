var express = require("express");

var app = express();

app.get("/", function(req, res){
    res.send("<h1>PROVA</h1>");
    console.log("hai fatto una get");
});

app.listen(3000, function(){
    console.log("Server partito sulla porta 3000!!!");
});