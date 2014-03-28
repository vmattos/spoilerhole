'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mediaSchema = new Schema({
	title: { type: String, required: true },
	spoilers: Array
});

module.exports = exports = mongoose.model('Media', mediaSchema);