"use strict"

var Fruta = require("../models/frutas")
const { param } = require("../rotas/fruta")

function provas(req,res){
    res.status(200).send({
        message:"esta rota esta a prova da rest api"
    })
}

async function saveFruta(req,res){
    var fruta = new Fruta()
    var params = req.body
    if(params.nome){
        fruta.nome = params.nome
        fruta.cor = params.cor
        fruta.temporada = params.temporada
        try {
            const frutaStored = await fruta.save();
            res.status(200).send({
                message: frutaStored
            });
        } catch (err) {
            res.status(500).send({
                message: "Erro na inserção: " + err.message
            });
        }
    }else{
        res.status(200).send({
            message:"o nome da fruta é obrigatorio"
        })
    }
}

async function getFrutas(req, res){
    try {
        const frutas = await Fruta.find().sort({"_id":-1});
        res.status(200).send({
            message: frutas
        });
    } catch (err) {
        res.status(500).send({
            message: "Erro na busca dos dados: " + err.message
        });
    }
}

async function getFruta(req, res){
    try {
        var frutaId = req.params.id
        const frutas = await Fruta.findById(frutaId);
        res.status(200).send({
            message: frutas
        });
    } catch (err) {
        res.status(500).send({
            message: "Erro na busca dos dados: " + err.message
        });
    }
}

async function updateFruta(req, res){
    try {
        var frutaId = req.params.id
        var update = req.body
        await Fruta.findByIdAndUpdate(frutaId,update)
        res.status(200).send({
            message: "Atualizado com sucesso"
        });
    } catch (err) {
        res.status(500).send({
            message: "Erro na atualizacao dos dados: " + err.message
        });
    }
}

async function deletarFruta(req, res){
    try{
        var frutaId = req.params.id
        await Fruta.deleteOne({_id:frutaId})
        res.status(200).send({
            message:"Item deletado com sucesso"
        })
    }catch(err){
        res.status(500).send({
            message: "Erro na deleção dos dados: " + err.message
        })
    }
}

module.exports = {
    provas,
    saveFruta,
    getFrutas,
    getFruta,
    updateFruta,
    deletarFruta
}