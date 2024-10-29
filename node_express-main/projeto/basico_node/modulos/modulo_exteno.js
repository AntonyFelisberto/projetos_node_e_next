var teste = "modulo externo"

module.exports = teste;

//se tiverem dois exports ele pega o ultimo
module.exports = function(){
    var menus = "menus"
    return menus
}