"use strict"

var mongoose = require("mongoose")
var schema = mongoose.Schema

var frutasSchema = schema({
    nome:String,
    cor:String,
    temporada:Boolean
})

module.exports = mongoose.model("Fruta",frutasSchema)