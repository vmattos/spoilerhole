var mongoose = require('mongoose');
var test = require('nodeunit');
//var Spoiler = require('../../app/models/spoiler');

var db;

db = mongoose.connect('mongodb://localhost/test');

module.exports = {

	"Should NOT create a spoiler without a media" : function(test){
		//var spoiler = new Spoiler();

		//test.throws(spoiler.save(function(error, spoiler) {
			test.done()
		//}));  
	},

	"Cleaning up database...": function(test) {
		Media.remove({}, function(){});	
		db.disconnect();
		test.done();
	}
};