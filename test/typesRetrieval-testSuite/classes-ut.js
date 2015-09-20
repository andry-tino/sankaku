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
var src = require('../../lib/source.js');
var ast = require('../../lib/JSParser/mozillaAst.js');

var getFromFile = function(filepath) {
  return fs.readFileSync(filepath, 'utf8');
};

var getASTFromFile = function(filepath) {
  return JSON.parse(fs.readFileSync(filepath, 'utf8'));
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
    
    for (var k in items) { // Cycling every file
      var astFromFile = ast();
      astFromFile.initialize(getASTFromFile(path.join(__dirname, items[k].fileName + '.json')));
      var registeredClasses = classes(
        astFromFile, 
        src(getFromFile(path.join(__dirname, items[k].fileName + '.js')))
      );
      
      var retrievedMatches = registeredClasses.retrieveTypes();
      
      var findInRetrievedMatches = function(className) {
        for (var i in retrievedMatches) {
          if (retrievedMatches[i].CLASS_NAME1 === className) {
            return retrievedMatches[i];
          }
          return null;
        }
      };
    
      // Test that we find the correct number of classes
      test.strictEqual(retrievedMatches.length, items[k].expected.length, 'The number of expected registered classes does not match with the expected onew!');
    
      for (var j in items[k].expected) { // Cycling every expected recognized class
        var className = items[k].classFQN;
        var baseClassName = items[k].baseClassFQN;
        var interfaces = items[k].interfaceFQNs;
        
        var foundInRetrievedTypes = findInRetrievedMatches();
        test.ok(foundInRetrievedTypes, 'Could not find matched type!');
        testName(test, foundInRetrievedTypes.BASE_CLASS_NAME, baseClassName, 'Base class name does not match!');
        
        test.strictEqual(interfaces.length, [].length, 'Expected: ' + 'expected' + ' interfaces, got: ' + 'actual' + '!');
        testNames(test, interfaces, [], 'Interfaces do not match!');
      }
    }
  
    test.done();
  }
};
 
