'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mediaSchema = new Schema({
	title: { type: String, required: true }
});

module.exports = exports = mongoose.model('Media', mediaSchema);