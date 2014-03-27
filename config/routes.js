'use strict';

module.exports = function(app) {
	var medias = require('../app/controllers/mediasController');

	// medias routes
	app.get('/', medias.index);
	app.get('/media', medias.new); 
	app.post('/media', medias.create);
};