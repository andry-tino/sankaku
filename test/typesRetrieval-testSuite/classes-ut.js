/**
 * classes-ut.js
 * Andrea Tino - 2015
 * 
 * Part of: typeRetrieval-testSuite
 */

var testData = require('./source-ut.json');
var classes = require('../../lib/classes.js');

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
   */
  getClassRegistrationsFromSource: function(test) {
    test.expect(0);

    // TODO
  
    test.done();
  }
};
 
