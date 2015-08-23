/**
 * interfaces.js
 * Andrea Tino
 */

/**
 * Detects and collects interfaces in the ScriptSharp source code.
 */
module.exports = function() {
  var nodeTypes = require('./JSParser/nodeTypes.js');
  
  var ast = null;
  var src = null;
  
  return {
    /**
     * Initializes the module.
     * _ast: A valid AST browser.
     * _src: A valid source locator.
     */
    initialize: function(_ast, _src) {
      if (!ast) {
        throw 'Error: AST cannot be null or undefined!';
      }
      if (!src) {
        throw 'Error: Source cannot be null or undefined!';
      }
      
      ast = _ast;
      src = _src;
    },
    
    /**
     * Locates classes in the AST and stores all ids.
     * return: The array of classes ids found.
     */
    retrieveTypes: function() {
      if (!ast || !src) {
        throw 'Error: Initialization needed!';
      }
      
      var interfaces = [];
      
      ast.browseThroughNodes(nodeTypes.NODE_STATEMENT_EXPR, function(d) {
        // We can add it
        interfaces.push(null);
      });
      
      return interfaces;
    }
  };
};

