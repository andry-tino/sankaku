/**
 * source-ut.js
 * Andrea Tino - 2015
 * 
 * Part of: source-testSuite
 */

var testData = require('./source-ut.json');
var source = require('../../lib/source.js');

var testResult = function(test, expected, actual, message) {
  var errorMessage = message + '! Expected: \'' + expected + '\', got: \'' + actual + '\'!';
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
    // TODO 
  
    test.done();
  }
};
 
