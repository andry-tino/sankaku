/**
 * mozillaAst.js
 * Andrea Tino - 2015
 */

/**
 * Provides API for navigating the mozilla AST.
 * Implements interface [ASTBrowser].
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
      // Program
      case 'program': return nodeTypes.NODE_PROGRAM;
      // Statements
      case 'emptystatement': return nodeTypes.NODE_STATEMENT_EMPTY;
      case 'blockstatement': return nodeTypes.NODE_STATEMENT_BLOCK;
      case 'expressionstatement': return nodeTypes.NODE_STATEMENT_EXPR;
      case 'ifstatement': return nodeTypes.NODE_STATEMENT_IF;
      case 'labeledstatement': return nodeTypes.NODE_STATEMENT_LABEL;
      case 'breakstatement': return nodeTypes.NODE_STATEMENT_BREAK;
      case 'continuestatement': return nodeTypes.NODE_STATEMENT_CONTINUE;
      case 'withstatement': return nodeTypes.NODE_STATEMENT_WITH;
      case 'switchstatement': return nodeTypes.NODE_STATEMENT_SWITCH;
      case 'returnstatement': return nodeTypes.NODE_STATEMENT_RETURN;
      case 'throwstatement': return nodeTypes.NODE_STATEMENT_THROW;
      case 'trystatement': return nodeTypes.NODE_STATEMENT_TRY;
      case 'whilestatement': return nodeTypes.NODE_STATEMENT_WHILE;
      case 'dowhilestatement': return nodeTypes.NODE_STATEMENT_DOWHILE;
      case 'forstatement': return nodeTypes.NODE_STATEMENT_FOR;
      case 'forinstatement': return nodeTypes.NODE_STATEMENT_FORIN;
      case 'letstatement': return nodeTypes.NODE_STATEMENT_LET;
      case 'debuggerstatement': return nodeTypes.NODE_STATEMENT_DEBUG;
      // Declarations
      case 'functiondeclaration': return nodeTypes.NODE_DECL_FUN;
      case 'variabledeclaration': return nodeTypes.NODE_DECL_VAR;
      case 'variabledeclarator': return nodeTypes.NODE_DECL_VARDCLRTR;
      // Expressions
      case 'thisexpression': return nodeTypes.NODE_EXPR_THIS;
      case 'arrayexpression': return nodeTypes.NODE_EXPR_ARRAY;
      case 'objectexpression': return nodeTypes.NODE_EXPR_OBJ;
      case 'property': return nodeTypes.NODE_EXPR_PROP;
      case 'functionexpression': return nodeTypes.NODE_EXPR_FUN;
      case 'arrowexpression': return nodeTypes.NODE_EXPR_ARROW;
      case 'sequenceexpression': return nodeTypes.NODE_EXPR_SEQ;
      case 'unaryexpression': return nodeTypes.NODE_EXPR_URY;
      case 'binaryexpression': return nodeTypes.NODE_EXPR_BRY;
      case 'assignmentexpression': return nodeTypes.NODE_EXPR_ASSGNMT;
      case 'updateexpression': return nodeTypes.NODE_EXPR_UPDATE;
      case 'logicalexpression': return nodeTypes.NODE_EXPR_LOGIC;
      case 'conditionalexpression': return nodeTypes.NODE_EXPR_COND;
      case 'newexpression': return nodeTypes.NODE_EXPR_NEW;
      case 'callexpression': return nodeTypes.NODE_EXPR_CALL;
      case 'memberexpression': return nodeTypes.NODE_EXPR_MEMBER;
      case 'yieldexpression': return nodeTypes.NODE_EXPR_YIELD;
      case 'comprehensionexpression': return nodeTypes.NODE_EXPR_COMPREHENSION;
      case 'generatorexpression': return nodeTypes.NODE_EXPR_GEN;
      case 'graphexpression': return nodeTypes.NODE_EXPR_GRAPH;
      case 'graphindexexpression': return nodeTypes.NODE_EXPR_GRAPHINDEX;
      case 'letexpression': return nodeTypes.NODE_EXPR_LET;
      // Patterns
      case 'objectpattern': return nodeTypes.NODE_PTTRN_OBJ;
      case 'arraypattern': return nodeTypes.NODE_PTTRN_ARRAY;
      // Clauses
      case 'switchcase': return nodeTypes.NODE_CLAUSE_SWITCHCASE;
      case 'catchclause': return nodeTypes.NODE_CLAUSE_CATCH;
      case 'comprehensionblock': return nodeTypes.NODE_CLAUSE_COMPREHENSIONBLOCK;
      case 'comprehensionif': return nodeTypes.NODE_CLAUSE_COMPREHENSIONIF;
      // Misc
      case 'identifier': return nodeTypes.NODE_MISC_ID;
      case 'literal': return nodeTypes.NODE_MISC_LITERAL;
      // None of the above
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
  
  // For each node calls callback.
  // callback: [ASTBrowserCallback]
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
     * _ast: [object]
     */ 
    initialize: function(_ast) {
      ast = validateAst(_ast);
    },

    /**
     * Gets the node type.
     * node: [object]
     * return: [ASTNodeType]
     */
    nodeType: function(node) {
      return node2NodeType(node);
    },
    
    /**
     * Navigates the body AST (first level nodes) and executes a callback.
     * callback: [ASTBrowserCallback]
     */
    browseThrough: function(callback) {
      browse(callback);
    },
    
    /**
     * Navigates the body AST and executes a callback only
     * for a specific node type.
     * nodeType: [ASTNodeType]
     * callback: [ASTBrowserCallback]
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
