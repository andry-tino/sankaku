/**
 * sourceLoader-ut.js
 * Andrea Tino - 2015
 * 
 * Part of: sourceLoader-testSuite
 */

var sourceLoader = require('../../lib/sourceLoader.js');

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
   * Gets the source successfully.
   */
  getSource: function(test) {
    test.expect(4);

    var src = sourceLoader('test-source1.md');
    
    test.ok(!src.error, 'No error should occur in loading file!');
    test.ok(src.source, 'Source should have been loaded!');
    test.ok(typeof src === 'string', 'Loaded source should be proper string!');
    test.ok(src.length > 0, 'Loaded source should contain at least 1 character!');
  
    test.done();
  }
};
