let home = require("./scr/homePage")
let enCartelera = require("./scr/enCartelera")
let masVotadas = require("./scr/masVotadas")
let sucursales = require("./scr/sucursales")
let contacto = require("./scr/contacto")
let preguntasfrecuentes = require("./scr/preguntasFrecuentes")

module.exports = {
    "/" : function() {
        return home
    },
    "/en-cartelera" : function() {
        return enCartelera
    },
    "/mas-votadas": function() {
        return masVotadas
    },
    "/sucursales": function() {
        return sucursales
    },
    "/contacto": function() {
        return contacto
    },
    "/preguntas-frecuentes": function() {
        return preguntasfrecuentes
    },
    '/favicon.ico': function () {
        return '';
    }
}
