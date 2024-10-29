var db = require('../../config/db');

module.exports = function(){
    this.all = function(retorno){
        var connection = db()
        return connection.query('SELECT * FROM clientes',retorno);
    }

    this.find = function(id,retorno){
        var connection = db()
        return connection.query('SELECT * FROM clientes WHERE id = ?',id,retorno);
    }

    this.save = function(dados,retorno){
        var connection = db()
        return connection.query('INSERT INTO clientes SET ?',dados,retorno);
    }

    return this;
}