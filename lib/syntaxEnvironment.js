/**
 * syntaxEnvironment.js
 * Andrea Tino - 2015
 */

/**
 * Main collection point for types to be rendered.
 */
module.exports = function() {
  var tsClass = require('./class.js');
  var tsInterface = require('./interface.js');
  var tsEnum = require('./enum.js');
  
  var classes = {};
  var interfaces = {};
  var enums = {};
  
  return {
    /**
     * Adds a class to the environment.
     * class: The class to add.
     */
    addClass: function(class) {
      
    },
    
    /**
     * Adds a interface to the environment.
     * interface: The interface to add.
     */
    addInterface: function(interface) {
      
    },
    
    /**
     * Adds an enum to the environment.
     * enum: The enum to add.
     */
    addEnum: function(enum) {
      
    }
  };
};
