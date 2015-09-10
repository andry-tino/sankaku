/**
 * sourceLoader.js
 * Andrea Tino - 2015
 */

/**
 * Loads a file.
 * This module swallows errors in reading a file.
 */
module.exports = function(_filepath) {
  var path = require('path');
  var fs = require('fs');

  var validateFilePath = function(filepath) {
    // TODO Add path validation
    return filepath;
  };
  
  var processFilePath = function(filepath) {
    return filepath;
  };

  var filepath = processFilePath(validateFilePath(_filepath));
  var error = null; // [object]
  var _source = null; // [string]
  
  var load = function() {
    try {
      _source = fs.readFileSync(
        path.join(__dirname, filepath), 
        { 
          encoding: 'utf8' 
        }
      );
    } catch (e) {
      error = e;
      source = null;
    }
  };

  // Constructor
  (function(){
    load();
  })();

  return {
    /**
     * The source.
     * [string]
     */
    source: _source,
    
    /**
     * The error if any.
     */
    error: _error
  };
};
