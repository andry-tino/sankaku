/**
 * source-ut.js
 * Andrea Tino - 2015
 * 
 * Part of: source-testSuite
 */

var testData = require('./source-ut.json');
var sourceLoader = require('../../lib/sourceLoader.js');
var source = require('../../lib/source.js');
var testUtils = require('../testUtils.js');
var astUtils = require('../../lib/JSParser/mozillaAstUtils.js');

var src = null; // [string]

var testResult = function(test, expected, actual, location, message) {
  var locPrinter = astUtils().printLocation;
  var errorMessage = message + '! ' + locPrinter(location) + ' Expected: \'' + expected + '\', got: \'' + actual + '\'!';
  if (!actual) {
    test.ok(!expected, errorMessage);
    return;
  }
  test.strictEqual(actual, expected, errorMessage);
};

module.exports = {
  /**
   * Initializes the test.
   */
  setUp: function(callback) {
    // Load the file
    src = sourceLoader('test-source1.md').source;
    
    if (callback) callback();
  },
  
  /**
   * Test cleanup.
   */
  tearDown: function(callback) {
    if (callback) callback();
  }, 
  
  /**
   * Retrieving parts in the code.
   */
  retrieveSourceFromLocations: function(test) {
    test.expect(1 * testUtils.getActiveTestNum(testData.locations));

    var tetra2loc = astUtils().buildLocation;
    var testSource = source(src);
    
    var items = testUtils.getActiveTests(testData.locations);
    for (var k in items) {
      var t4 = items[k].location;
      var loc = tetra2loc(t4[0], t4[1], t4[2], t4[3]);
      var excerpt = testSource.at(loc);
      
      testResult(test, items[k].expected, excerpt, loc, items[k].description + " - Text does not match at specified location!");
    }
  
    test.done();
  }
};
 
