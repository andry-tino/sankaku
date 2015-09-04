/**
 * class.js
 * Andrea Tino - 2015
 */

/**
 * Describes a ScriptSharp class for TypeScript rendering.
 * This module implements interface: [TSRenderer].
 */
module.exports = function() {
  var classFQName = null; // [string]
  var baseClassFQName = null; // [string]
  var implementedInterfaces = null; // [string*]
  
  return {
    /**
     * Initializes the class with initial information.
     * rm: [RegexMatches]
     */
    initialize: function(rm) {
      if (!rm) {
        throw 'Error: A [RegexMatches] is needed to initialize the class!';
      }
    },
    
    /**
     * Renders the TypeScript class.
     */
    render: function() {
      
    }
  };
};
