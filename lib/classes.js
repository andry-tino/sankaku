/**
 * classes.js
 * Andrea Tino - 2015
 */

/**
 * Detects and collects classes in the ScriptSharp source code.
 */
module.exports = function() {
  var nodeTypes = require('./JSParser/nodeTypes.js');
  
  var classes = [];
  
  return {
    /**
     * Locates classes in the AST and stores all ids.
     * ast: A valid AST browser
     */
    retrieveTypes: function(ast) {
      if (!ast) {
        throw 'Error: AST cannot be null or undefined!';
      }
      
      ast.browseThroughNodes(nodeTypes.NODE_PROGRAM, function(d) {
        
      });
    }
  };
};

