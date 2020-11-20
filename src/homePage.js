const customFunctions=require('../customFunctions');

let movieJSON=customFunctions.getMovies();
let movieTitles=movieJSON.movies.map(movie => movie.title);
movieTitles.sort();
let homeContent='​BIENVENIDOS A DH MOVIES\nEl mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuevana y PopCorn​.\n\n'
homeContent+=`Total de Peliculas: ${movieTitles.length}\n\n`;
homeContent+=`Listado de Peliculas \n`;
homeContent+='---------------------\n'
for(let title of movieTitles){
    homeContent+=`•${title}\n`
};
homeContent+='\nRecorda que podés visitar las secciones:\n\n• En Cartelera \n• Mas Votadas \n• Sucursales \n• Contacto \n• Preguntas Frecuentes'

module.exports=homeContent;