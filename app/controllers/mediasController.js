'use strict';

var Media = require('../models/media');
var Spoiler = require('../models/spoiler');

module.exports = exports = function(page) {

	return {
		index: function(req, res) {
			Media.find({}, function(error, medias) {
				res.render('index', {
					title: 'Spoilerhole',
					medias: medias
				});
			});
		},

		new: function(req, res) {
			res.render('medias/new', {
				title: 'New media'
			});
		},

		create: function(req, res, next) {
			var media = new Media(req.body.media);

			media.save(function(error, media) {
				if(error) next(error);

				res.send(media);
			});
		},

		get: function(req, res, next) {
			var id = req.params.id; 

			var query = Media.findOne({ _id: id }).exec();
				
			query.then(function(media) {
				
				Spoiler.find({ media: media._id }, function(error, spoilers) {
					if(error) next(error);

					res.render('medias/mediaView', {
						media: media,
						title: media.title + '\'s Spoilers',
						spoilers: spoilers
					});
				});
			});
		}
	}
}