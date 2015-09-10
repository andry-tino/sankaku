/**
 * sourceLoader.js
 * Andrea Tino - 2015
 */

/**
 * Loads a file.
 * This module swallows errors in reading a file.
 */
module.exports = function(_filepath, _base) {
  var path = require('path');
  var fs = require('fs');

  var validateFilePath = function(filepath) {
    // TODO Add path validation
    return filepath;
  };
  
  var processFilePath = function(filepath) {
    return filepath;
  };

  var validateBase = function(base) {
    if (!base || typeof base !== 'string') {
      return '';
    }
    return base;
  };
  
  var processBase = function(base) {
    return base;
  };

  var filepath = processFilePath(validateFilePath(_filepath));
  var base = processBase(validateBase(_base));
  var _error = null; // [object]
  var _source = null; // [string]
  
  var load = function() {
    try {
      _source = fs.readFileSync(
        path.join(base, filepath), 
        { 
          encoding: 'utf8' 
        }
      );
    } catch (e) {
      _error = e;
      _source = null;
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
