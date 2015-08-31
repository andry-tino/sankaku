#!/usr/bin/env node

/**
 * testRunner.js
 * Andrea Tino - 2015
 */
 
var nodeunit = require('nodeunit');

var regexTestSuite = './regex-testSuite/regex-ut.js';

nodeunit.reporters.default.run([
  regexTestSuite
]);

