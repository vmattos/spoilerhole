var mongoose = require('mongoose');
var test = require('nodeunit');

var db;

db = mongoose.connect('mongodb://localhost/test');

module.exports = {

	"Cleaning up database...": function(test) {
		Media.remove({}, function(){});	
		db.disconnect();
		test.done();
	}
};