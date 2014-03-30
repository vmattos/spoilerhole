'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var spoilerSchema = new Schema({
	text: { type: String, required: true },
	media: { type: ObjectId, required: true }
});

module.exports = exports = mongoose.model('Spoiler', spoilerSchema);