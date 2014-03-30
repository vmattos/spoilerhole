var mongoose = require('mongoose');
var test = require('nodeunit');
var Media = require('../../../app/models/media');
var Spoiler = require('../../../app/models/spoiler');

var db;

db = mongoose.connect('mongodb://localhost/test');

module.exports = {

    "Should insert media with a title": function(test) {
	
		var media = new Media({ title: 'Lord of The Rings' });

		media.save(function(error, media) {
			if(error) console.log(error);

			test.equal(media.title, 'Lord of The Rings', '"Title" should be Lord of The Rings');
			test.done();
		});
	},

	"Should NOT insert media without a title": function(test) {
	
		var media = new Media();

		test.throws(media.save(function(error, media) {
			test.done();
		}));
	},

	"Cleaning up database...": function(test) {
		Media.remove({}, function(){})
			.exec(db.disconnect());
		test.done();
	}
};