/**
 * interfaces.js
 * Andrea Tino
 */

/**
 * Detects and collects interfaces in the ScriptSharp source code.
 */
module.exports = function() {
  var nodeTypes = require('./JSParser/nodeTypes.js');
  var tsInterface = require('./interface.js');
  
  var interfaces = [];
  
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
        // We can add it
        classes.push(null);
      });
    }
  };
};

