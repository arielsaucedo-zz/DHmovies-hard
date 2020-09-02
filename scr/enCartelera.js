let movies = require("../data/movies.json");

let listadoPelicula = movies.map( function(movies) {
  return "Titulo:" + " " +  movies.title + "<br/> " + "Reseña:" + " " + movies.overview + "<br/>" + "<br/>"
})

let contentCartelera = `En Cartelera
    <br/>
    <br/>
    Total de peliculas: ${movies.length}
    <br/>
    <br/>
    Listado de Peliculas:
    <br/>
    <br/>
    <ul>
     ${listadoPelicula.join(" ")}
    <ul>`

module.exports = contentCartelera;
