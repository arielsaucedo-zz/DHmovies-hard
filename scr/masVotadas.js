let movies = require("../data/movies.json");

let listadoMasVotadas = ""
let contadorPelicula = 0;
let ratingPromedio = 0;
let resultado = 0;
let resultadoPromedioFinal = 0;

movies.map(function(movies){
  if (movies.vote_average >= 7) {
    listadoMasVotadas += "Titulo:" +
    " " +
    movies.title +
    "<br/> " +
    "Rating:" +
    " " +
    movies.vote_average +
    "<br/> " +
    "Reseña:" +
    " " +
    movies.overview +
    "<br/> " +
    "<br/> ";
    contadorPelicula = contadorPelicula + 1;
    ratingPromedio = ratingPromedio + movies.vote_average;
  }
  else{}
})

resultado = ratingPromedio / contadorPelicula;
resultadoPromedioFinal = resultado.toFixed(2);

let contentVotadas = `Más Votadas
		<br/>
		<br/>
		Total de películas ${contadorPelicula}
		<br/>
		<br/>
		Rating promedio ${resultadoPromedioFinal}
		<br/>
		<br/>
		Listados de películas
		<br/>
		<br/>
		${listadoMasVotadas}
        `

module.exports = contentVotadas;
