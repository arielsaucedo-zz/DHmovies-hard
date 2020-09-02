let movies = require("../data/movies.json");

movies = movies.sort(function (a, b) {
  if (a.title > b.title) return 1;
  if (a.title < b.title) return -1;
  return 0;
});

let listado = movies.map( function(movies) {
  return movies.title + "<br/>"
})

let content = `Bienvenidos a DH Movies el mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, 
  Cuevana y PopCorn.
  <br/> 
  <br/>
  Total de peliculas: ${movies.length}
  <br/>
  <br/>
  Listado de peliculas
  <br/>
  <br/>
 <ul>
  ${listado.join( " ")} 
  <br/>
  <br/>
  Recordá que podés visitar las secciones:
  <br/>
  <a href="en-cartelera">En Cartelera</a>
  <a href="mas-votadas">Más Votadas</a>
  <a href="sucursales">Sucursales</a>
  <a href="contacto">Contacto</a>
  <a href="preguntas-frecuentes">Preguntas Frecuentes</a>
  `

module.exports = content;
