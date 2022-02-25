var express = require("express");
const path = require("path");

var app = express();

app.get("/", function(req, res){
    res.send("<h1>PROVA</h1>");
    console.log("hai fatto una get");
});

app.get("/vista", function(req, res){
    res.sendFile(path.join(__dirname,"views/vista.html"))
    console.log("hai fatto una get su vista");
});


app.get("/pagina", function(req, res){
    res.send("<h1>SEI SU PAGINA</h1>");
    console.log("hai fatto una get su pagina");
});


app.listen(3000, function(){
    console.log("Server partito sulla porta 3000!!!");
});