const customFunctions=require('../customFunctions');

let movieJSON=customFunctions.getMovies();
movieJSON.movies.map(movie=>movie.title).sort();
let carteleraContent = 'EN CARTELERA\n';
carteleraContent+='---------------\n\n'
carteleraContent+=`Total peliculas: ${movieJSON.movies.length}\n\n`;
for (let movie of movieJSON.movies){
	carteleraContent+=`Titulo: ${movie.title}\n---------\nReseña: ${movie.overview}\n\n\n`;
};
module.exports=carteleraContent;