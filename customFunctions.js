const fs=require('fs');
//The path module allows me to use path.join()
const path=require('path');

//JSON parsing function
const parsingFile=(filePath)=>JSON.parse(fs.readFileSync(filePath,'utf-8'));

//Using path.join(__dirname, 'file') to join a file in here
const moviesFilePath=path.join(__dirname, './data/movies.json');
const faqFilePath=path.join(__dirname, './data/faqs.json');
const theatersFilePath=path.join(__dirname, './data/theaters.json');

//Export each parsed JSON
//Each JSON in here has been set to a function
module.exports={
	getMovies:()=> parsingFile(moviesFilePath),
	getFaqs:()=> parsingFile(faqFilePath),
	getTheaters:()=> parsingFile(theatersFilePath),
};