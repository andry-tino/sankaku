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
  
  var text = require('../text.js');
  
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
  var fileContent = null;

  // Private functions
  var escapeContent = function(str) {
    return text().jsEscape(str);
  };
  
  var fetchFileContent = function() {
    try {
      fileContent = fs.readFileSync(filepath, {encoding: 'utf8'}); 
    } catch(e) {
      throw 'Error loading file content from ' + filepath + '!';
    }
  };
  
  // Constructor
  {
    fetchFileContent();
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
      if (!fileContent) {
        throw 'Error: File content not available to create shadow file!';
      }
      
      var dir = path.dirname(filepath);
      var shadowFilePath = path.join(dir, shadowFileName());
      
      // If file exists, overwrite it, if it does not exists, create it
      var fd = fs.openSync(shadowFilePath, 'w');
      var shadowContent = escapeContent(fileContent); // fileContent available from cton time
      shadowContent = 'print(Reflect.parse(\"' + shadowContent + '\"));';
      fs.writeSync(fd, shadowContent, 0, {encoding: 'utf8'});
      fs.closeSync(fd);
    },
    
    /**
     * Removes the shadow file.
     */
    removeShadowFile: function(errorIfDoesNotExists) {
      errorIfDoesNotExists = (typeof errorIfDoesNotExists === 'undefined') ? 
        false : errorIfDoesNotExists;
      
      var dir = path.dirname(filepath);
      var shadowFilePath = path.join(dir, shadowFileName());
      
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

