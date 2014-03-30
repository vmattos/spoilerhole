var mongoose = require('mongoose');
var test = require('nodeunit');
var Spoiler = require('../../app/models/spoiler');
var Media = require('../../app/models/media');

var db;

db = mongoose.connect('mongodb://localhost/test');

module.exports = {

	"Should NOT create a spoiler without a media" : function(test){
		var spoiler = new Spoiler();

		test.throws(spoiler.save(function(error, spoiler) {
			test.done()
		}));  
	},

	"Should NOT create a spoiler with a media but without a text": function(test) {
		var media = new Media({ title: 'The Sixth Sense' });

		var spoiler = new Spoiler({ media: media });

		test.throws(spoiler.save(function(error, spoiler) {
			test.done();
		}));
	},

	"Should insert a spoiler with media and text": function(test) {
		var media = new Media({ title: 'The Sixth Sense' });

		var spoiler = new Spoiler({
			media: media,
			text: 'Bruce Willis was dead since the beggining'
		});

		spoiler.save(function(error, spoiler) {
			if(error) console.log(error);

			test.equal(spoiler.media, media._id, "media id is wrong!");
			test.equal(spoiler.text, 'Bruce Willis was dead since the beggining');

			test.done();
		});
	},

	"Should insert multiple spoilers in a single media": function(test) {
		var media = new Media({ title: 'Game of Thrones' });

		var spoiler1 = {
			media: media,
			text: 'Ned Stark dies'
		};

		var spoiler2 = {
			media: media,
			text: 'Everybody else dies'
		};

		Spoiler.create(spoiler1, spoiler2, function(error, spoiler1, spoiler2) {
			if(error) console.log(error);

			test.equals(spoiler1.media, media._id);
			test.equals(spoiler2.media, media._id);

			test.done()
		}).then(media.save());
	},

	"Should query multipĺe spoilers media": function(test) {
		Media.findOne({ title: 'Game of Thrones' }, function(error, media) {
			if(error) console.log(error);
		}).exec(function(error, media){

			Spoiler.find({ media: media._id }, function(error, spoilers) {
				if(error) console.log(error);

				test.equals(spoilers[0].text, 'Ned Stark dies');
				test.equals(spoilers[1].text, 'Everybody else dies');

				test.done();
			});
		});
		
	},

	"Cleaning up database...": function(test) {
		Spoiler.remove({}, function(){})
			.exec(Media.remove({}, function(){}))
			.then(db.disconnect());
		test.done();
	}
};