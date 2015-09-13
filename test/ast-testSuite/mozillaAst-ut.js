/**
 * mozillaAst-ut.js
 * Andrea Tino - 2015
 * 
 * Part of: ast-testSuite
 */

var path = require('path');
var fs = require('fs');
var testData = require('mozillaAst-ut.json');
var regex = require('../../lib/JSParser/mozillaAst.js');
var testUtils = require('../testUtils.js');

var testResult = function(test, actual, expected, message) {
  var errorMessage = message + '! Expected: \'' + expected + '\', got: \'' + actual + '\'!';
  if (!actual) {
    test.ok(!expected, errorMessage);
    return;
  }
  test.strictEqual(actual, expected, errorMessage);
};

var readFileContent = function(filePath) {
  // TODO
};

module.exports = {
  /**
   * Initializes the test.
   */
  setUp: function(callback) {
    if (callback) callback();
  },
  
  /**
   * Test cleanup.
   */
  tearDown: function(callback) {
    if (callback) callback();
  },
  
  /**
   * Recognizing class statements.
   */
  programs: function(test) {
    test.expect(1 * testUtils.getActiveTestNum(testData.programs));

    var regexp = regex();

    var items = testUtils.getActiveTests(testData.programs);   
    for (var k in items) {
      var a;
      
      // Initial checks
      test.ok(handledMatches.ALL != null, 'ALL should not be null!');
  
      // Checking members
      testResult(test, handledMatches.ALL, items[k].expected.ALL, items[k].description + '');
    }
  
    test.done();
  },

  /**
   * Testing node associations to node types.
   */
  nodeTypeAssociations: function(test) {
    test.expect(0);
    test.done();
  }
};
 
