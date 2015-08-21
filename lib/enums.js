/**
 * enums.js
 * Andrea Tino - 2015
 */

/**
 * Detects and collects enums in the ScriptSharp source code.
 */
module.exports = function() {
  var nodeTypes = require('./JSParser/nodeTypes.js');
  var tsEnum = require('./enum.js');
  
  var enums = [];
  
  return {
    /**
     * Locates enums in the AST and stores all ids.
     * ast: A valid AST browser
     */
    retrieveTypes: function(ast) {
      if (!ast) {
        throw 'Error: AST cannot be null or undefined!';
      }
      
      ast.browseThroughNodes(nodeTypes.NODE_PROGRAM, function(d) {
        // We can add it
        classes.push(null);
      });
    }
  };
};

