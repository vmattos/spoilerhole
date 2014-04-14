'use strict';

module.exports = function(app) {
	var page = require('../app/models/page');
	var medias = require('../app/controllers/mediasController')(page);
	var spoilers = require('../app/controllers/spoilersController')(page);

	// medias routes
	app.get('/', medias.index);
	app.get('/media', medias.new); 
	app.post('/media', medias.create);
	app.get('/media/:id', medias.get);

	// spoilers routes
	app.get('/media/:id/spoiler', spoilers.new);
	app.post('/media/:id/spoiler', spoilers.create);
	app.delete('/spoiler/:id', spoilers.remove);

};