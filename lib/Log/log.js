/**
 * log.js
 * Andrea Tino - 2015
 */

/**
 * Responsible for handling logging.
 */
module.exports = function(_filepath) {
  var fs = require('fs');
  var path = require('path');
  
  var filepath = _filepath;
  
  var logMsg = function(header, message) {
    
  };
  
  return {
    /**
     * Logs an information.
     */
    info: function(text) {
      if (!text) {
        return;
      }
      
      console.log('info: ' + text);
    },
    
    /**
     * Logs a warning.
     */
    warn: function(text) {
      if (!text) {
        return;
      }
      
      console.log('warning: ' + text);
    },
    
    /**
     * Logs an error.
     */
    err: function(text) {
      if (!text) {
        return;
      }
      
      console.log('error: ' + text);
    }
  };
};

