/**
 * log.js
 * Andrea Tino - 2015
 */

/**
 * Responsible for handling logging.
 */
module.exports = function() {
  var fs = require('fs');
  var path = require('path');
  
  return {
    /**
     * Initializes the module.
     * filepath: Path to destination file.
     */
    initialize: function(filepath) {
      if (!filepath) {
        throw 'Error: filepath cannot be null or undefined!';
      }
      
      // TODO
    },
    
    /**
     * Logs an information.
     */
    info: function(text) {
      if (!text) {
        return;
      }
      
      // TODO
    },
    
    /**
     * Logs a warning.
     */
    warn: function(text) {
      if (!text) {
        return;
      }
      
      // TODO
    },
    
    /**
     * Logs an error.
     */
    err: function(text) {
      if (!text) {
        return;
      }
      
      // TODO
    }
  };
};

