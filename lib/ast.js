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
  var _nodeType = {
    NODE_VAR_DECL: 0
  },
  
  var browse = function() {
    
  };
  
  // Constructor
  (function() {
    
  })();
  
  return {
    /**
     * Describes the types of nodes.
     */
    nodeType: _nodeType,
    
    /**
     * Navigates the body AST and executes a callback.
     */
    browseThrough = function(ast, callback) {
      
    },
    
    /**
     * Navigates the body AST and executes a callback only
     * for a specific node type.
     */
    browseThroughNodes = function(ast, nodeType, callback) {
      
    }
  };
};
