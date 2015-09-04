/**
 * enum.js
 * Andrea Tino - 2015
 */

/**
 * Describes a ScriptSharp enumeration for TypeScript rendering.
 * This module implements interface: [TSRenderer].
 */
module.exports = function() {
  var enumFQName = null; // [string]
  var enumValues = null; // [string*]
  
  return {
    /**
     * Initializes the enum with initial information.
     * rm: [RegexMatches]
     */
    initialize: function(rm) {
      if (!rm) {
        throw 'Error: A [RegexMatches] is needed to initialize the enum!';
      }
    },
    
    /**
     * Renders the TypeScript enum.
     */
    render: function() {
      
    }
  };
};
