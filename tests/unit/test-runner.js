#!/usr/bin/env node
var reporter = require('nodeunit').reporters.default;
process.env.NODE_ENV = 'test';

reporter.run([
	'tests/unit/media/mediaModels.js', 
	'tests/unit/spoiler/spoilerModels.js'
]);