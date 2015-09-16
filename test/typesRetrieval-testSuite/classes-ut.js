/**
 * classes-ut.js
 * Andrea Tino - 2015
 * 
 * Part of: typeRetrieval-testSuite
 */

var path = require('path');
var fs = require('fs');

var testData = require('./classes-ut.json');
var classes = require('../../lib/classes.js');

var getFromFile = function(filepath) {
  return fs.readFileSync(filepath, 'utf8');
};

// Runs 1 assertion
var testName = function(test, actual, expected, message) {
  var errorMessage = message + '! ' + ' Expected: \'' + expected + '\', got: \'' + actual + '\'!';
  if (!actual) {
    test.ok(!expected, errorMessage);
    return;
  }
  test.strictEqual(actual, expected, errorMessage);
};

// Runs N assertions
// Where N = expected.length
var testNames = function(test, actual, expected, message) {
  for (var k in expected) {
    testName(test, actual[k], expected[k], message + '! Element does not match expected!');
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
    var items = testUtils.getActiveTests(testData.classRegistrations);
    
    var assertionsNum = 0;
    for (var k in items) {
      assertionsNum += 2 * items[k].expected.length; // We run 2 assertion per expected class
      for (var j in items[k].expected) {
        assertionsNum += items[k].expected[j].interfaceFQNs.length;
      }
    }
    
    test.expect(assertionsNum);
    
    for (var k in items) {
      for (var j in items[k].expected) {
        var className = items[k].classFQN;
        var baseClassName = items[k].baseClassFQN;
        var interfaces = items[k].interfaceFQNs;
        
        testName(test, 'actual', className, 'Class name does not match!');
        testName(test, 'actual', baseClassName, 'Base class name does not match!');
        
        test.strictEqual(interfaces.length, [].length, 'Expected: ' + 'expected' + ' interfaces, got: ' + 'actual' + '!');
        testNames(test, interfaces, [], 'Interfaces do not match!');
      }
    }
  
    test.done();
  }
};
 
