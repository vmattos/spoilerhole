'use strict';

var Media = require('../models/media');

var spoilers = {};

module.exports = exports = spoilers;

spoilers.new = function(req, res, next){
	var mediaId = req.params.id;

	Media.findOne({ _id: mediaId }, function(error, media) {
		res.render('spoilers/new', {
			media: media
		});
	});
};

spoilers.create = function(req, res, next) {

	var mediaId = req.params.id;
	var spoiler = req.body.spoiler;

	Media.findOne({ _id: mediaId }, function(error, media) {
		media.spoilers.push(spoiler.text);

		media.save(function(error) {
			if(error) next(error);

			res.redirect('/media/' + mediaId);
		}); 
	});
};