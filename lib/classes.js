/**
 * classes.js
 * Andrea Tino - 2015
 */

/**
 * Detects and collects classes in the ScriptSharp source code.
 */
module.exports = function() {
  var nodeTypes = require('./JSParser/nodeTypes.js');
  var source = require('./source.js');
  
  var ast = null;
  var src = null;
  var classes = [];
  
  return {
    /**
     * Initializes the module.
     * _ast: A valid AST browser.
     * _src: The source string.
     */
    initialize: function(_ast, _src) {
      if (!ast) {
        throw 'Error: AST cannot be null or undefined!';
      }
      if (!src) {
        throw 'Error: Source cannot be null or undefined!';
      }
      
      ast = _ast;
      src = source(_src); // We directly create the locator
    },
    
    /**
     * Locates classes in the AST and stores all ids.
     */
    retrieveTypes: function() {
      if (!ast || !src) {
        throw 'Error: Initialization needed!';
      }
      
      ast.browseThroughNodes(nodeTypes.NODE_STATEMENT_EXPR, function(d) {
        // We can add it
        classes.push(null);
      });
    }
  };
};

