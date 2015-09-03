/**
 * mozillaAst.js
 * Andrea Tino - 2015
 */

/**
 * Provides API for navigating the mozilla AST.
 */
module.exports = function() {
  var nodeTypes = require('./nodeTypes.js');

  var validateAst = function(ast) {
    if (!ast) {
      throw 'Error: AST cannot be null or undefined!';
    }
    if (typeof ast !== 'object') {
      throw 'Error: AST must be an object!';
    }
    
    return ast;
  };
  
  // Variables
  var ast = null;
  
  // Private members  
  var node2NodeType = function(node) {
    if (!node) {
      throw 'Error: Node cannot be null or undefined!';
    }
    
    var type = node.type;
    if (!type) {
      throw 'Error: Invalid node! Cannot find property <type> in node.';
    }
    if (typeof type !== 'string') {
      throw 'Error: Node type is not a string!';
    }
    type = type.toLowerCase();
    
    switch (type) {
      case 'program': return nodeTypes.NODE_PROGRAM;
      default: return nodeTypes.NODE_UNKNOWN;
    }
  };
  
  var nodeTypeAssert = function(node, type2Assert) {
    var actual = node2NodeType(node);
    if (actual !== type2Assert) {
      throw 'Error: Node type assert failed! Expected: ' + 
        type2Assert + ', actual: ' + actual;
    }
  };
  
  // For each node calls callback and passes object:
  // { type: NodeType, node: Node (object) }
  var browse = function(callback) {
    if (!ast) {
      throw 'Error: AST needed!';
    }
    
    // We do nothing if callback is not a proper function
    if (!callback || typeof callback !== 'function') {
      return;
    }
    
    // The root is expected to be type Program
    nodeTypeAssert(ast, nodeTypes.NODE_PROGRAM);
    var programItems = ast.body;
    
    // Nothing to do if we have no items
    if (!programItems || programItems.length <= 0) {
      return;
    }
    
    for (var k in programItems) {
      var item = programItems[k];
      if (!item) {
        continue;
      }
      callback({
        type: node2NodeType(item), 
        node: item
      });
    }
  };
  
  // Constructor
  (function() {
    
  })();
  
  return {
    /**
     * Initialization to be performed.
     */ 
    initialize: function(_ast) {
      ast = validateAst(_ast);
    },

    /**
     * Gets the node type.
     */
    nodeType: function(node) {
      return node2NodeType(node);
    },
    
    /**
     * Navigates the body AST (first level nodes) and executes a callback.
     * callback: A function accepting an argument of type:
     * { type: NodeType, node: Node (object) }
     */
    browseThrough: function(callback) {
      browse(callback);
    },
    
    /**
     * Navigates the body AST and executes a callback only
     * for a specific node type.
     * nodeType: The node type which triggers the callback
     * callback: A function accepting an argument of type:
     * { type: NodeType, node: Node (object) }
     */
    browseThroughNode: function(nodeType, callback) {
      browse(function(d) {
        if (d.nodeType === nodeType) {
          callback();
        }
      });
    }
  };
};
