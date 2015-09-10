/**
 * mozillaAst-ut.js
 * Andrea Tino - 2015
 * 
 * Part of: ast-testSuite
 */

var regex = require('../../lib/JSParser/mozillaAst.js');

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
  }
};
 
