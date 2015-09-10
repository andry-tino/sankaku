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
  getSourceFromValidFile: function(test) {
    test.expect(4);

    var src = sourceLoader('test-source1.md');
    
    test.ok(src.error === null, 'No error should occur in loading file! But we got error: ' + JSON.stringify(src.error));
    test.ok(src.source !== null, 'Source should have been loaded! But we got error: ' + JSON.stringify(src.error));
    test.ok(typeof src === 'string', 'Loaded source should be proper string!');
    test.ok(src.length > 0, 'Loaded source should contain at least 1 character!');
  
    test.done();
  },
  
  /**
   * Gets the source not successfully.
   */
  getSourceFromInvalidFile: function(test) {
    test.expect(2);

    var src = sourceLoader('invalid-file.inv');
    
    test.ok(src.error !== null, 'Error should have been swallowed when loading file!');
    test.ok(src.source === null, 'Source should not have been loaded! But we got source: ' + JSON.stringify(src.source));
  
    test.done();
  }
};
