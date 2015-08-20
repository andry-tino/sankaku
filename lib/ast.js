/**
 * ast.js
 * Andrea Tino - 2015
 */

/**
 * Provides API for navigating the AST.
 */
module.exports = function(_ast) {
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
  var ast = validateAst(_ast);
  
  // Private members
  var _nodeTypes = {
    NODE_PROGRAM: 0,
    NODE_VAR_DECL: 1,
    NODE_UNKNOWN: -1
  },
  
  var node2NodeType = function() {
    
  };
  
  var browse = function(callback) {
    if (!ast) {
      throw 'Error: AST needed!';
    }
    
    // The root is expected to be type Program
    if (ast)
  };
  
  // Constructor
  (function() {
    
  })();
  
  return {
    /**
     * Describes the types of nodes.
     */
    nodeTypes: _nodeTypes,
    
    /**
     * Gets the node type.
     */
    nodeType: function(node) {
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
        case 'program': return _nodeTypes.NODE_PROGRAM;
        default: return _nodeTypes.NODE_UNKNOWN;
      }
    },
    
    /**
     * Navigates the body AST (first level nodes) and executes a callback.
     * callback: A function accepting an argument of type 'data'.
     * data: { nodeType }
     */
    browseThrough = function(callback) {
      browse(callback);
    },
    
    /**
     * Navigates the body AST and executes a callback only
     * for a specific node type.
     */
    browseThroughNodes = function(nodeType, callback) {
      browse(function(d) {
        if (d.nodeType === nodeType) {
          callback();
        }
      });
    }
  };
};
