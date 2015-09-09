#!/usr/bin/env node

/**
 * testRunner.js
 * Andrea Tino - 2015
 */
 
var nodeunit = require('nodeunit');
var path = require('path');

// Regex tests
var regexTestSuite = path.join(__dirname, 'regex-testSuite/regex-ut.js');

// Source tests
var sourceTestSuite = path.join(__dirname, 'source-testSuite/source-ut.js');

// Types retrieval
var typesRetrievalTestSuites = {
  classesTestSuite: path.join(__dirname, 'typesRetrieval-testSuite/classes-ut.js'),
  interfacesTestSuite: path.join(__dirname, 'typesRetrieval-testSuite/interfaces-ut.js'),
  enumsTestSuite: path.join(__dirname, 'typesRetrieval-testSuite/enums-ut.js')
};

// Tests to execute
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

