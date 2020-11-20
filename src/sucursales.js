const customFunctions=require('../customFunctions');

let movieContent = customFunctions.getTheaters();

let theaterContent='NUESTROS CINES\n';
theaterContent+='-----------------\n\n'
let roomsInEach = movieContent.theaters.map(theaters => theaters.total_rooms);
let totalRoomz = roomsInEach.reduce((before, after) => after += before);
theaterContent+=`Total de salas: ${totalRoomz}\n`;
theaterContent+='----------------\n\n'
for (let theater of movieContent.theaters) {
	theaterContent+=`${theater.name}\n${theater.address}\n---------------\n${theater.description}\nCantidad de salas: ${theater.total_rooms}\n\n`;
};
module.exports=theaterContent;
