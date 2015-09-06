/**
 * regex-ut.js
 * Andrea Tino - 2015
 * 
 * Part of: regex-testSuite
 */

var testData = require('./regex-ut.json');
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
    test.expect(11 * testData.classStatements.length);

    var regexp = regex();
     
    for (var k in testData.classStatements) {
      var matches = regexp.match(
        regexp.REGISTER_CLASS_STMNT.regex, 
        testData.classStatements[k].source);
      var handledMatches = regexp.REGISTER_CLASS_STMNT.handler(matches);
      
      // Initial checks
      test.ok(handledMatches.ALL != null, 'ALL should not be null!');
  
      // Checking members
      testResult(test, handledMatches.ALL, testData.classStatements[k].expected.ALL, 'ALL does not match!');
      testResult(test, handledMatches.BASE_CLASS_NAME, testData.classStatements[k].expected.BASE_CLASS_NAME, 'BASE_CLASS_NAME does not match!');
      testResult(test, handledMatches.CLASS_NAME1, testData.classStatements[k].expected.CLASS_NAME1, 'CLASS_NAME1 does not match!');
      testResult(test, handledMatches.CLASS_NAME2, testData.classStatements[k].expected.CLASS_NAME2, 'CLASS_NAME2 does not match!');
      testResult(test, handledMatches.INTERFACE_NAME1, testData.classStatements[k].expected.INTERFACE_NAME1, 'INTERFACE_NAME1 does not match!');
      testResult(test, handledMatches.INTERFACE_NAME2, testData.classStatements[k].expected.INTERFACE_NAME2, 'INTERFACE_NAME2 does not match!');
      testResult(test, handledMatches.INTERFACE_NAME3, testData.classStatements[k].expected.INTERFACE_NAME3, 'INTERFACE_NAME3 does not match!');
      testResult(test, handledMatches.INTERFACE_NAME4, testData.classStatements[k].expected.INTERFACE_NAME4, 'INTERFACE_NAME4 does not match!');
      testResult(test, handledMatches.INTERFACE_NAME5, testData.classStatements[k].expected.INTERFACE_NAME5, 'INTERFACE_NAME5 does not match!');
      testResult(test, handledMatches.INTERFACE_NAME6, testData.classStatements[k].expected.INTERFACE_NAME6, 'INTERFACE_NAME6 does not match!');
    }
  
    test.done();
  },
  
  /**
   * Recognizing fully qualified names.
   */
  fullyQualifiedNames: function(test) {
    test.expect(5 * testData.fullyQualifiedNames.length);

    var regexp = regex();
     
    for (var k in testData.fullyQualifiedNames) {
      var matches = regexp.match(
        regexp.FULLY_QUALIFIED_NAME.regex,
        testData.fullyQualifiedNames[k].source);
      var handledMatches = regexp.FULLY_QUALIFIED_NAME.handler(matches);
      
      // Initial checks
      test.ok(handledMatches != null, 'Regex should match!');
      test.ok(handledMatches.ALL != null, 'ALL should not be null!');
  
      // Checking members
      testResult(test, handledMatches.ALL, testData.fullyQualifiedNames[k].expected.ALL, 'ALL does not match!');
      testResult(test, handledMatches.FIRST_IDENTIFIER_NAME, testData.fullyQualifiedNames[k].expected.FIRST_IDENTIFIER_NAME, 'FIRST_IDENTIFIER_NAME does not match!');
      testResult(test, handledMatches.LAST_IDENTIFIER_NAME, testData.fullyQualifiedNames[k].expected.LAST_IDENTIFIER_NAME, 'LAST_IDENTIFIER_NAME does not match!');
    }
  
    test.done();
  },

  // TODO: Tests to add
  // interfaces
  // enums
};
 
