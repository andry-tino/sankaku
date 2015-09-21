/**
 * fileManager.js
 * Andrea Tino - 2015
 */

/**
 * Handles files.
 * We create a shadow file in order to store escaped source Javascript
 * so that we can call the parser on that file.
 */
module.exports = function(fpath) {
  var fs = require('fs');
  var path = require('path');
  
  var jsConverter = require('./jsConverter.js');
  
  // Module construction
  var validatePath = function(p) {
    if (!p) {
      throw 'Error: Path cannot be null or undefined!';
    }
    return p;
  };
  
  var processPath = function(p) {
    return path.resolve(p); // Returns a normalized absolute path
  };

  // Private variables
  var EXT = '.3kaku';
  var filepath = processPath(validatePath(fpath)); // Absolute
  var fileContent = null;

  // Private functions
  var fetchFileContent = function() {
    try {
      fileContent = fs.readFileSync(filepath, {encoding: 'utf8'}); 
    } catch(e) {
      throw 'Error loading file content from ' + filepath + '!';
    }
  };
  
  var getShadowFileName = function() {
    return path.basename(filepath + EXT);
  };
 
  var getShadowFilePath = function() {
    return filepath + EXT;
  };
 
  // Constructor
  (function() {
    fetchFileContent();
  })();

  return {
    /**
     * Gets the name of the shadow file.
     */
    shadowFileName: function() {
      return getShadowFileName();
    },
  
    shadowFilePath: function() {
      return getShadowFilePath();
    },
  
    /**
     * Gets the original Javascript source.
     */
    source: function() {
      return fileContent;
    },

    /**
     * Creates the shadow file and initializes its content basing 
     * on the original file.
     */
    createShadowFile: function() {
      if (!fileContent) {
        throw 'Error: File content not available to create shadow file!';
      }
      
      var shadowFilePath = getShadowFilePath();
      
      // If file exists, overwrite it, if it does not exists, create it
      var fd = fs.openSync(shadowFilePath, 'w');
      var shadowContent = jsConverter().js2parseableJs(fileContent); // fileContent available from cton time
      var bytes = fs.writeSync(fd, shadowContent, 0, 'utf8');
      fs.closeSync(fd);
      
      if (bytes <= 0) {
        throw 'Error: Error while writing shadow file!';
      }
    },
    
    /**
     * Removes the shadow file.
     */
    removeShadowFile: function(errorIfDoesNotExists) {
      errorIfDoesNotExists = (typeof errorIfDoesNotExists === 'undefined') ? 
        false : errorIfDoesNotExists;
      
      var shadowFilePath = getShadowFilePath();
      
      // If the file does not exist, do nothing or throw
      if (!fs.existsSync(shadowFilePath) && errorIfDoesNotExists) {
        throw 'Error: Cannot find shadow file to remove!';
      } else {
        return;
      }
      
      // The shadow file exists: we need to remove it
      fs.unlinkSync(shadowFilePath);
    }
  };
};

