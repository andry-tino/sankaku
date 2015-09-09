/**
 * interfaces-ut.js
 * Andrea Tino - 2015
 * 
 * Part of: typeRetrieval-testSuite
 */

var testData = require('./source-ut.json');
var classes = require('../../lib/interfaces.js');

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
   * Getting all interface registrations in the code.
   */
  getInterfaceRegistrationsFromSource: function(test) {
    test.expect(0);

    // TODO
  
    test.done();
  }
};
 
