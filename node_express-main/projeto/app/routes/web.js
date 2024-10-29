var clienteController = require('../controllers/clienteController');

module.exports = function(app){
    
    app.get("/",function(req,res){
        clienteController.index(req,res)
    })

    app.post("/",function(req,res){
        clienteController.store(req,res)
    })
    
    app.get('/contato', function(req, res){
        res.render('site/contato')
    })

    app.get("/detalhe/:id",function(req,res){
        clienteController.show(req,res)
    })
}