/**
 * fileManager.js
 * Andrea Tino - 2015
 */

/**
 * Handling files.
 */
module.exports = function(fpath) {
  var fs = require('fs');
  var path = require('path');
  
  // Module construction
  var validatePath = function(p) {
    if (!p) {
      throw 'Error: Path cannot be null or undefined!';
    }
    return p;
  };
  
  var processPath = function(p) {
    return path.normalize(p);
  };

  // Private variables
  var EXT = '.3kaku';
  var filepath = processPath(validatePath(fpath));

  // Private functions
  var escapeContent = function() {
  };

  return {
    /**
     * Gets the name of the shadow file.
     */
    shadowFileName() = function() {
      return filepath + EXT;
    },

    /**
     * Creates the shadow file and initializes its content basing 
     * on the original file.
     */
    createShadowFile: function() {
      var dir = path.dirname(filepath);
      var shadowFilePath = path.join(dir, shadowFileName());
      
      // TODO
    },
    
    /**
     * Removes the shadow file.
     */
    removeShadowFile: function(errorIfDoesNotExists) {
      errorIfDoesNotExists = (typeof errorIfDoesNotExists === 'undefined') ? 
        false : errorIfDoesNotExists;
      
      // TODO
    }
  };  
};

