var http = require("http");
var express = require("express");
var modulo = require("../modulos/modulo_exteno");
var moduloComoFunction = require("../modulos/modulo_exteno")();

console.log(modulo())
console.log(moduloComoFunction)

var server = http.createServer(function(req,res){
    var pagina = req.url;
    console.log(pagina);
    if(pagina == "/contato"){
        res.end(`
            <h1>pagina funcionando</h1>
            <h1>pagina funcionando</h1>
            <h1>pagina funcionando</h1>
        `);
    }else{
        res.end("OK para URL:" + pagina);
    }
})

console.log("localhost:8000")
server.listen(8000);


var app = express();
app.set('view engine', 'ejs');

app.get('/contato', function(req, res){
    res.render('site/contato')
})

app.get('/home', function(req, res){
    res.render('site/home')
})

app.get("/",function(req,res){
    res.send("funcao realizada")
})

app.listen(8080,function(){
    console.log("localhost:8080");
});