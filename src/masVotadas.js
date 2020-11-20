const customFunctions = require('../customFunctions');

let movieContent = customFunctions.getMovies();

let mostVoted = movieContent.movies.filter(movie=>movie.vote_average >= 7);
let score = mostVoted.map(movie => movie.vote_average);
let scoreSum = score.reduce((before, after) => after += before);
let ratingAverage = (scoreSum / score.length).toFixed(1);

let voteContent='MAS VOTADAS\n';
voteContent+='---------------\n\n'
voteContent+=`Total peliculas: ${mostVoted.length}\n\n`;
voteContent+=`Rating promedio: ${ratingAverage}\n\n\n`;
for (let movie of mostVoted){
	voteContent+=`Titulo: ${movie.title}\nRating: ${movie.vote_average}\nReseña: ${movie.overview}\n\n\n\n`;
};
module.exports=voteContent;
