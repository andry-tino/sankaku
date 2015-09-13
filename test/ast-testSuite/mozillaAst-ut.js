/**
 * mozillaAst-ut.js
 * Andrea Tino - 2015
 * 
 * Part of: ast-testSuite
 */

var path = require('path');
var fs = require('fs');

var testData = require('mozillaAst-ut.json');
var ast = require('../../lib/JSParser/mozillaAst.js');
var testUtils = require('../testUtils.js');

var testTypeAssociation = function(test, value, actual, expected, message) {
  var errorMessage = message + '! Expected: \'' + expected + '\', got: \'' + actual + '\' from value: \'' + value + '\'!';
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
   * Testing node associations to node types.
   */
  nodeTypeAssociations: function(test) {
    test.expect(2 * testUtils.getActiveTestNum(testData.associations));
    
    var typeEvaluator = ast().nodeType;
    var getFromFile = function(filepath) {
      return fs.readFileSync(filepath, 'utf8');
    };
    
    var items = testUtils.getActiveTests(testData.associations);   
    for (var k in items) {
      var astString = getFromFile(path.join(__dirname, items[k].fileName + '.json'));
      var astObj = JSON.parse(astString);
      
      // This test needs to have the AST object in a variable called `x`
      var x = astObj;
      var value = eval(items[k].jsonNodeAccessPath);
      
      test.ok(value, 'We should get a value from JS evaluation!');
      testTypeAssociation(test, value, typeEvaluator(value), items[k].expected.type, items[k].description + ' - Type not correct!');
    }
    
    test.done();
  }
};
 
