#!/usr/bin/env node

/**
 * testRunner.js
 * Andrea Tino - 2015
 */
 
var nodeunit = require('nodeunit');
var path = require('path');

var regexTestSuite = path.join(__dirname, 'regex-testSuite/regex-ut.js');
var sourceTestSuite = path.join(__dirname, 'source-testSuite/source-ut.js');

nodeunit.reporters.default.run([
  regexTestSuite,
  sourceTestSuite
], 
null, 
function(d) {
  if (d) {
    throw 'Error: ' + d;
  }
});

