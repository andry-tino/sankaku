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
  
  // Configuration: { classIds = [], interfaceIds = [], enumIds = [] }
  var config = null;
  
  // Associative arrays: id -> Typescript mapper (ts[Class|Interface|Enum])
  var classes = {};
  var interfaces = {};
  var enums = {};
  
  return {
    /**
     * Initializes the module.
     * _config: Configuration: 
     * { classIds = [], interfaceIds = [], enumIds = [] }
     */
    initialize: function(_config) {
      if (!_config) {
        throw 'Error: Configuration cannot be null or undefined!';
      }
      config = _config;
    },
    
    /**
     * Builds TypeScript classes.
     */
    buildClasses: function() {
      
    },
    
    /**
     * Builds TypeScript interfaces.
     */
    buildInterfaces: function() {
      
    },
    
    /**
     * Build enums.
     */
    buildEnums: function() {
      
    }
  };
};
