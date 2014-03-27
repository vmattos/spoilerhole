'use strict';

var Media = require('../models/media');
var medias = {};

module.exports = exports = medias;

medias.index = function(req, res) {
	Media.find({}, function(error, medias) {
		res.render('index', {
			title: 'Spoilerhole',
			medias: medias
		});
	});
};

medias.new = function(req, res) {
	res.render('medias/new', {
		title: 'New media'
	});
};

medias.create = function(req, res, next) {
	var media = new Media(req.body.media);

	media.save(function(error, media) {
		if(error) next(error);

		res.send(media);
	});
};