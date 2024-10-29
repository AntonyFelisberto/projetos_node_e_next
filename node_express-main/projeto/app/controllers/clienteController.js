var clienteModel = require('../models/clientModel')();

module.exports.index = function(req,res) {
    clienteModel.all(function(err,result){
        res.render('site/home',{clientes:result,erros:{},dados:{}})
    });
}

module.exports.store = function(req,res) {
    var dados = req.body;

    req.assert("nome","preencha o seu nome").notEmpty();
    req.assert("nome","Nome deve ter de 3 a 20 caracteres").len(3,20);
    req.assert("email","preencha com um email valido").isEmail();
    req.assert("email","preencha o seu e-mail").notEmpty();

    var validacaoErros = req.validationErrors();

    if(validacaoErros){
        clienteModel.all(function(err,result){
            res.render('site/home',{clientes:result,erros:validacaoErros,dados:dados})
        });
        return;
    }

    clienteModel.save(dados,function(err,result){
        if(err){
            console.log("Erro ao adicionar cliente "+ err)
        }
        res.redirect('/');
    })
}

module.exports.show = function(req,res) {
    clienteModel.find(req.params.id,function(err,result){
        if(result[0] && !err){
            res.render('site/detalhe',{clientes:result[0]})
        }else{
            console.log("esse cliente nao encontrado")
            res.redirect('/');
        }
    })
}