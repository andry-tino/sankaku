/**
 * regex-ut.js
 * Andrea Tino - 2015
 * 
 * Part of: regex-testSuite
 */

var testData = require('regex-ut.json');
var regex = require('../../lib/regex.js');
 
module.exports = {
  /**
    * Initializes the test.
    */
  setUp: function(callback) {
  
  },
  
  /**
    * Test cleanup.
    */
  tearDown: function(callback) {
    
  },
  
  /**
    * Recognizing class statements.
    */
  classStatememts: function(test) {
    var regexp = regex();
  
    for (var k in testData.classStatements) {
      var matches = regexp.match(
        regexp.REGISTER_CLASS_STMNT.regex, 
        testData.classStatements[k].source);
      var handledMatches = regexp.REGISTER_CLASS_STMNT.handler(matches);
  
      // Initial checks
      test.ok(handledMatches.ALL != null, 'ALL should not be null!');
  
      // Checking members
      test.strictEqual(handledMatches.ALL, testData.classStatements[k].expected.ALL, 'ALL does not match!');
      test.strictEqual(handledMatches.BASE_CLASS_NAME, testData.classStatements[k].expected.BASE_CLASS_NAME, 'BASE_CLASS_NAME does not match!');
      test.strictEqual(handledMatches.CLASS_NAME1, testData.classStatements[k].expected.CLASS_NAME1, 'CLASS_NAME1 does not match!');
      test.strictEqual(handledMatches.CLASS_NAME2, testData.classStatements[k].expected.CLASS_NAME2, 'CLASS_NAME2 does not match!');
      test.strictEqual(handledMatches.INTERFACE_NAME1, testData.classStatements[k].expected.INTERFACE_NAME1, 'INTERFACE_NAME1 does not match!');
      test.strictEqual(handledMatches.INTERFACE_NAME2, testData.classStatements[k].expected.INTERFACE_NAME2, 'INTERFACE_NAME2 does not match!');
      test.strictEqual(handledMatches.INTERFACE_NAME3, testData.classStatements[k].expected.INTERFACE_NAME3, 'INTERFACE_NAME3 does not match!');
      test.strictEqual(handledMatches.INTERFACE_NAME4, testData.classStatements[k].expected.INTERFACE_NAME4, 'INTERFACE_NAME4 does not match!');
      test.strictEqual(handledMatches.INTERFACE_NAME5, testData.classStatements[k].expected.INTERFACE_NAME5, 'INTERFACE_NAME5 does not match!');
      test.strictEqual(handledMatches.INTERFACE_NAME6, testData.classStatements[k].expected.INTERFACE_NAME6, 'INTERFACE_NAME6 does not match!');
    }
  
    test.done();
  },
  
  /**
    * Recognizing identifiers.
    */
  identifiers: function(test) {
  
  }
}
 