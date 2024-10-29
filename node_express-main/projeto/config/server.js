module.exports = function(){
    var express = require("express");
    var bodyParser = require("body-parser");
    var rotas = require("../app/routes/web");
    var expressValidator = require("express-validator");

    var app = express();
    app.set('view engine', 'ejs');
    app.set('views','./app/views');
    
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}))

    app.use(expressValidator());

    rotas(app)

    app.listen(8080,function(){
        console.log("localhost:8080");
    });
};