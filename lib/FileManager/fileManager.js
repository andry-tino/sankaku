/**
 * fileManager.js
 * Andrea Tino - 2015
 */

/**
 * Handling files.
 */
module.exports = function(_path) {
  var validatePath = function(p) {
    if (!p) {
      throw 'Error: Path cannot be null or undefined!';
    }
    return p;
  };

  var fs = require('fs');

  var path = validatePath(_path);

  var escapeContent = function() {
  };

  return {
    /**
     * Gets the name of the shadow file.
     */
    shadowFile() = function() {
      return path + '.3kaku';
    },

    /**
     * Creates the shadow file and initializes its content basing 
     * on the original file.
     */
    createShadowFile: function() {
    }
  };  
};

