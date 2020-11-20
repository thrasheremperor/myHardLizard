const index = require('./src/index');

module.exports = {
	routes: (req, res) => {
		switch (req.url) {
			case '/':
				res.end(index.homePage);
				break;
			case '/en-cartelera':
				res.end(index.enCartelera);
				break;
			case '/mas-votadas':
				res.end(index.masVotadas);
				break;
			case '/sucursales':
				res.end(index.sucursales);
				break;
			case '/contacto':
				res.end(index.contacto);
				break;
			case '/preguntas-frecuentes':
				res.end(index.faqs);
				break;
			default:
				res.end('404 not found');
		};
	}
};
