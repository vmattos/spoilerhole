'use strict';

module.exports = function(app) {
	var medias = require('../app/controllers/mediasController');


	app.get('/', medias.index);
};