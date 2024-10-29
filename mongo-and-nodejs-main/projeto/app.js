"use strict"

var express = require("express");
var bodyParser = require("body-parser");
var frutaRouter = require("./rotas/fruta")

var app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use("/api",frutaRouter)

app.get("/provas-api",(req,res) => {
    res.status(200).send({
        message:"esta rota esta a prova da rest api"
    })
})

module.exports = app