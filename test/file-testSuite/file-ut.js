/**
 * file-ut.js
 * Andrea Tino - 2015
 * 
 * Part of: file-testSuite
 */

var testData = require('./file-ut.json');
var testUtils = require('../testUtils.js');
var jsConverter = require('../../lib/FileManager/jsConverter.js');

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
   * Converting js.
   */
  conversionSucceeds: function(test) {
    test.expect(3 * testUtils.getActiveTestNum(testData.jsStrings));

    var getParseableJs = jsConverter().js2parseableJs;

    var items = testUtils.getActiveTests(testData.jsStrings);   
    for (var k in items) {
      var pjs = getParseableJs(items[k].js);
      
      // Initial checks
      test.ok(pjs.indexOf('print') >= 0, 'Converted js should contain `print`!');
      test.ok(pjs.indexOf('JSON.stringify') >= 0, 'Converted js should contain `JSON.stringify`!');
      test.ok(pjs.indexOf('Reflect.parse') >= 0, 'Converted js should contain `Reflect.parse`!');
    }
  
    test.done();
  },
  
  /**
   * Null or undefined causes empty string to be returned.
   */
  nullOrUndefinedInput: function(test) {
    test.expect(2);

    var getParseableJs = jsConverter().js2parseableJs;

    test.strictEqual(getParseableJs(null), '', 'Null input should return empty string!');
    test.strictEqual(getParseableJs(undefined), '', 'Undefined input should return empty string!');
  
    test.done();
  },
  
  /**
   * Non string input causes empty string to be returned.
   */
  nonStringInput: function(test) {
    test.expect(1);

    var getParseableJs = jsConverter().js2parseableJs;

    test.strictEqual(getParseableJs(0), '', 'Non string input should return empty string!');
    
    test.done();
  }
};
 
