#!/usr/bin/env node
var reporter = require('nodeunit').reporters.default;
process.env.NODE_ENV = 'test';

reporter.run(['test/media/mediaModels.js']);