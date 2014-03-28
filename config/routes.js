'use strict';

module.exports = function(app) {
	var medias = require('../app/controllers/mediasController');
	var spoilers = require('../app/controllers/spoilersController');

	// medias routes
	app.get('/', medias.index);
	app.get('/media', medias.new); 
	app.post('/media', medias.create);
	app.get('/media/:id', medias.get);

	// spoilers routes
	app.get('/media/:id/spoiler', spoilers.new);
};