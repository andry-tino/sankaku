/**
 * classes.js
 * Andrea Tino - 2015
 */

/**
 * Detects and collects classes in the ScriptSharp source code.
 */
module.exports = function() {
  var nodeTypes = require('./JSParser/nodeTypes.js');
  var regex = require('./regex.js');
  
  var ast = null; // AST browser
  var src = null; // Source locator
  
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
      
      var classes = [];
      
      ast.browseThroughNodes(nodeTypes.NODE_STATEMENT_EXPR, function(d) {
        // 1. Get AST node.
        // 2. Retrieve location information from AST node.
        // 3. Retrieve code from source given location object in AST.
        // 4. Check matches with class definition statements
        // TODO
        
        // We can add it
        classes.push(null);
      });
      
      return classes;
    }
  };
};

