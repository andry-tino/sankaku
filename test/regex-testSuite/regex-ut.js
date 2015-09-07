/**
 * regex-ut.js
 * Andrea Tino - 2015
 * 
 * Part of: regex-testSuite
 */

var testData = require('./regex-ut.json');
var testUtils = require('../testUtils.js');
var regex = require('../../lib/regex.js');

var testResult = function(test, actual, expected, message) {
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
   * Recognizing class statements.
   */
  classStatememts: function(test) {
    test.expect(11 * testUtils.getActiveTestNum(testData.classStatements));

    var regexp = regex();

    var items = testUtils.getActiveTests(testData.classStatements);   
    for (var k in items) {
      var matches = regexp.match(
        regexp.REGISTER_CLASS_STMNT.regex, 
        items[k].source);
      var handledMatches = regexp.REGISTER_CLASS_STMNT.handler(matches);
      
      // Initial checks
      test.ok(handledMatches.ALL != null, 'ALL should not be null!');
  
      // Checking members
      testResult(test, handledMatches.ALL, items[k].expected.ALL, items[k].description + ' - ALL does not match!');
      testResult(test, handledMatches.BASE_CLASS_NAME, items[k].expected.BASE_CLASS_NAME, items[k].description + ' - BASE_CLASS_NAME does not match!');
      testResult(test, handledMatches.CLASS_NAME1, items[k].expected.CLASS_NAME1, items[k].description + ' - CLASS_NAME1 does not match!');
      testResult(test, handledMatches.CLASS_NAME2, items[k].expected.CLASS_NAME2, items[k].description + ' - CLASS_NAME2 does not match!');
      testResult(test, handledMatches.INTERFACE_NAME1, items[k].expected.INTERFACE_NAME1, items[k].description + ' - INTERFACE_NAME1 does not match!');
      testResult(test, handledMatches.INTERFACE_NAME2, items[k].expected.INTERFACE_NAME2, items[k].description + ' - INTERFACE_NAME2 does not match!');
      testResult(test, handledMatches.INTERFACE_NAME3, items[k].expected.INTERFACE_NAME3, items[k].description + ' - INTERFACE_NAME3 does not match!');
      testResult(test, handledMatches.INTERFACE_NAME4, items[k].expected.INTERFACE_NAME4, items[k].description + ' - INTERFACE_NAME4 does not match!');
      testResult(test, handledMatches.INTERFACE_NAME5, items[k].expected.INTERFACE_NAME5, items[k].description + ' - INTERFACE_NAME5 does not match!');
      testResult(test, handledMatches.INTERFACE_NAME6, items[k].expected.INTERFACE_NAME6, items[k].description + ' - INTERFACE_NAME6 does not match!');
    }
  
    test.done();
  },
  
  /**
   * Recognizing fully qualified names.
   */
  fullyQualifiedNames: function(test) {
    test.expect(5 * testUtils.getActiveTestNum(testData.fullyQualifiedNames));

    var regexp = regex();
    
    var items = testUtils.getActiveTests(testData.fullyQualifiedNames);
    for (var k in items) {
      var matches = regexp.match(
        regexp.FULLY_QUALIFIED_NAME.regex,
        items[k].source);
      var handledMatches = regexp.FULLY_QUALIFIED_NAME.handler(matches);
      
      // Initial checks
      test.ok(handledMatches != null, 'Regex should match!');
      test.ok(handledMatches.ALL != null, 'ALL should not be null!');
  
      // Checking members
      testResult(test, handledMatches.ALL, items[k].expected.ALL, items[k].description + ' - ALL does not match!');
      testResult(test, handledMatches.FIRST_IDENTIFIER_NAME, items[k].expected.FIRST_IDENTIFIER_NAME, items[k].description +  ' - FIRST_IDENTIFIER_NAME does not match!');
      testResult(test, handledMatches.LAST_IDENTIFIER_NAME, items[k].expected.LAST_IDENTIFIER_NAME, items[k].description + ' - LAST_IDENTIFIER_NAME does not match!');
    }
  
    test.done();
  },

  // TODO: Tests to add
  // interfaces
  // enums
};
 
