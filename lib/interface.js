/**
 * interface.js
 * Andrea Tino - 2015
 */

/**
 * Describes a ScriptSharp interface for TypeScript rendering.
 * This module implements interface: [TSRenderer].
 */
module.exports = function() {
  var interfaceFQName = null; // [string]
  
  return {
    /**
     * Initializes the interface with initial information.
     * rm: [RegexMatches]
     */
    initialize: function(rm) {
      if (!rm) {
        throw 'Error: A [RegexMatches] is needed to initialize the interface!';
      }
    },
    
    /**
     * Renders the TypeScript interface.
     */
    render: function() {
      
    }
  };
};
