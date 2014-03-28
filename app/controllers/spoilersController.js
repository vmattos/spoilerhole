'use strict';

var Media = require('../models/media');

var spoilers = {};

module.exports = exports = spoilers;

spoilers.new = function(req, res, next){
	var mediaId = req.params.id;

	Media.findOne({ _id: id }, function(error, media) {
		res.render('spoilers/new', {
			media: media
		});
	});
};