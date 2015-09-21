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

// Source loader tests
var sourceLoaderTestSuite = path.join(__dirname, 'sourceLoader-testSuite/sourceLoader-ut.js');

// File tests
var fileTestSuite = path.join(__dirname, 'file-testSuite/file-ut.js');

// Types retrieval
var typesRetrievalTestSuites = {
  classesTestSuite: path.join(__dirname, 'typesRetrieval-testSuite/classes-ut.js'),
  interfacesTestSuite: path.join(__dirname, 'typesRetrieval-testSuite/interfaces-ut.js'),
  enumsTestSuite: path.join(__dirname, 'typesRetrieval-testSuite/enums-ut.js')
};

// AST tests
var astTestSuites = {
  mozillaAstTestSuite: path.join(__dirname, 'ast-testSuite/mozillaAst-ut.js')
};

// Tests to execute
nodeunit.reporters.default.run([
  regexTestSuite,
  sourceTestSuite,
  sourceLoaderTestSuite,
  fileTestSuite,
  astTestSuites.mozillaAstTestSuite
], 
null, 
function(d) {
  if (d) {
    throw 'Error: ' + d;
  }
});

