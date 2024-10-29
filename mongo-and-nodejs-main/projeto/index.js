"use strict"

var mongoose = require("mongoose");
var app = require("./app");
var port = 3800;

mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost:27017/curso_mongo")
    .then(()=>{
        console.log("A conexao mongo db foi realizada corretamente");
        app.listen(port,()=>{
            console.log("o servidor esta ouvindo na porta 3800")
        })
    })
    .catch(err=> console.log(err));

