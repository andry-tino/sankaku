/**
 * classes-ut.js
 * Andrea Tino - 2015
 * 
 * Part of: typeRetrieval-testSuite
 */

var testData = require('./classes-ut.json');
var classes = require('../../lib/classes.js');

// Runs 1 assertion
var testName = function(test, expected, actual, message) {
  var errorMessage = message + '! ' + ' Expected: \'' + expected + '\', got: \'' + actual + '\'!';
  if (!actual) {
    test.ok(!expected, errorMessage);
    return;
  }
  test.strictEqual(actual, expected, errorMessage);
};

// Runs 1 + N assertions
// Where N = expected.length
var testNames = function(test, expected, actual, message) {
  test.strictEqual(actual.length, expected.length, 
    message + '! ' + ' Expected: ' + expected + ' elements, got: ' + actual + '!');
  
  for (var k in expected) {
    testName(test, expected[k], actual[k], message + '! Element does not match expected!');
  }
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
   * Getting all class registrations in the code.
   * This unit test focuses on method `retrieveTypes`.
   * 
   * The test operates on a file, retrieves all class registrations,
   * and compare with expected values. Retrieved registrations must
   * match expected, but the assumption is not on completeness:
   * 1. Get all expected class registrations.
   * 2. Retrieve all class registrations in source file.
   * 3. Check that all expected classes are present in source.
   */
  getClassRegistrationsFromSource: function(test) {
    var items = testUtils.getActiveTests(testData.classRegistrations.expected);
    
    var assertionsNum = 2 * items.length;
    for (var k in items) {
      assertionsNum += items[k].interfaceFQNs.length;
    }
    
    test.expect(assertionsNum);
    
    for (var k in items) {
      var className = items[k].classFQN;
      var baseClassName = items[k].baseClassFQN;
      var interfaces = items[k].interfaceFQNs;
      
      testName(test, className, 'actual', 'Class name does not match!');
      testName(test, baseClassName, 'actual', 'Base class name does not match!');
      testNames(test, interfaces, [], 'Interfaces do not match!');
    }
  
    test.done();
  }
};
 
