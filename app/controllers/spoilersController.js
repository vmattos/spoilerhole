'use strict';

var Media = require('../models/media');
var Spoiler = require('../models/spoiler');

var spoilers = {};

module.exports = exports = spoilers;

spoilers.new = function(req, res, next){
	var mediaId = req.params.id;

	Media.findOne({ _id: mediaId }, function(error, media) {
		if(error) next(error);

		res.render('spoilers/new', {
			media: media
		});
	});
};

spoilers.create = function(req, res, next) {

	var mediaId = req.params.id;
	var spoiler = new Spoiler(req.body.spoiler);

	spoiler.media = mediaId;

	spoiler.save(function(error) {
		if(error) next(error);

		res.redirect('/media/' + mediaId);
	});
};

spoilers.remove = function(req, res, next) {

	var spoilerId = req.params.id;
	var mediaId;

	Spoiler.findOne({ _id: spoilerId }, function(error, spoiler) {
		if(error) next(error);

		mediaId = spoiler.media;
	}).exec(function(error, spoiler) {
		spoiler.remove(function(error) {
			if(error) next(error);

			res.redirect('/media/' + mediaId);
		});
	});
};