/**
 * source-ut.js
 * Andrea Tino - 2015
 * 
 * Part of: source-testSuite
 */

var fs = require('fs');
var path = require('path');

var testData = require('./source-ut.json');
var source = require('../../lib/source.js');
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
    src = fs.readFileSync(path.join(__dirname, 'test-source1.md'), { encoding: 'utf8' });
    
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
    test.expect(1 * testData.locations.length);

    var tetra2loc = astUtils().buildLocation;
    var testSource = source(src);
    
    for (var k in testData.locations) {
      var t4 = testData.locations[k].location;
      var loc = tetra2loc(t4[0], t4[1], t4[2], t4[3]);
      var excerpt = testSource.at(loc);
      
      testResult(test, testData.locations[k].expected, excerpt, loc, "Text does not match at specified location!");
    }
  
    test.done();
  }
};
 
