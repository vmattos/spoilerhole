'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mediaSchema = new Schema({
	title: String
});

module.exports = exports = mongoose.model('Media', mediaSchema);