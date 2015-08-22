/**
 * nodeTypes.js
 * Andrea Tino - 2015
 */

/**
 * Provides API for navigating the AST.
 */
module.exports = {
  /**
   * Program node.
   */ 
  NODE_PROGRAM: 0,
  
  // Statements: 100
  /**
   * Statement node.
   * Empty statement.
   */ 
  NODE_STATEMENT_EMPTY: 100,
  
  /**
   * Statement node.
   * Block statement.
   */ 
  NODE_STATEMENT_BLOCK: 101,
  
  /**
   * Statement node.
   * Expression statement.
   */ 
  NODE_STATEMENT_EXPR: 102,
  
  /**
   * Statement node.
   * If statement.
   */ 
  NODE_STATEMENT_IF: 103,
  
  /**
   * Statement node.
   * Labeled statement.
   */ 
  NODE_STATEMENT_LABEL: 104,
  
  /**
   * Statement node.
   * Break statement.
   */ 
  NODE_STATEMENT_BREAK: 105,
  
  /**
   * Statement node.
   * Continue statement.
   */ 
  NODE_STATEMENT_CONTINUE: 106,
  
  /**
   * Statement node.
   * With statement.
   */ 
  NODE_STATEMENT_WITH: 107,
  
  /**
   * Statement node.
   * Switch statement.
   */ 
  NODE_STATEMENT_SWITCH: 108,
  
  /**
   * Statement node.
   * Return statement.
   */ 
  NODE_STATEMENT_RETURN: 109,
  
  /**
   * Statement node.
   * Throw statement.
   */ 
  NODE_STATEMENT_THROW: 110,
  
  /**
   * Statement node.
   * Try statement.
   */ 
  NODE_STATEMENT_TRY: 111,
  
  /**
   * Statement node.
   * While statement.
   */ 
  NODE_STATEMENT_WHILE: 112,
  
  /**
   * Statement node.
   * DoWhile statement.
   */ 
  NODE_STATEMENT_DOWHILE: 113,
  
  /**
   * Statement node.
   * For statement.
   */ 
  NODE_STATEMENT_FOR: 114,
  
  /**
   * Statement node.
   * ForIn statement.
   */ 
  NODE_STATEMENT_FORIN: 115,
  
  /**
   * Statement node.
   * ForOf statement.
   */ 
  NODE_STATEMENT_FOROF: 116,
  
  /**
   * Statement node.
   * Let statement.
   */ 
  NODE_STATEMENT_LET: 117,
  
  /**
   * Statement node.
   * Debugger statement.
   */ 
  NODE_STATEMENT_DEBUG: 118,
  
  // Declarations: 200
  /**
   * Declaration node.
   * Function declaration.
   */ 
  NODE_DECL_FUN: 200,
  
  /**
   * Declaration node.
   * Variable declaration.
   */ 
  NODE_DECL_VAR: 201,
  
  /**
   * Declaration node.
   * Variable declarator.
   */ 
  NODE_DECL_VARDCLRTR: 202,
  
  // Expressions: 300
  /**
   * Expression node.
   * Variable expression.
   */ 
  NODE_EXPR_THIS: 300,
  
  /**
   * Expression node.
   * Array expression.
   */ 
  NODE_EXPR_ARRAY: 301,
  
  /**
   * Expression node.
   * Object expression.
   */ 
  NODE_EXPR_OBJ: 302,
  
  /**
   * Expression node.
   * Property expression.
   */ 
  NODE_EXPR_PROP: 303,
  
  /**
   * Expression node.
   * Function expression.
   */ 
  NODE_EXPR_FUN: 304,
  
  /**
   * Expression node.
   * Arrow expression.
   */ 
  NODE_EXPR_ARROW: 305,
  
  /**
   * Expression node.
   * Sequence expression.
   */ 
  NODE_EXPR_SEQ: 306,
  
  /**
   * Expression node.
   * Unary expression.
   */ 
  NODE_EXPR_URY: 307,
  
  /**
   * Expression node.
   * Binary expression.
   */ 
  NODE_EXPR_BRY: 308,
  
  /**
   * Expression node.
   * Assignment expression.
   */ 
  NODE_EXPR_ASSGNMT: 309,
  
  /**
   * Expression node.
   * Update expression.
   */ 
  NODE_EXPR_UPDATE: 310,
  
  /**
   * Expression node.
   * Logical expression.
   */ 
  NODE_EXPR_LOGIC: 311,
  
  /**
   * Expression node.
   * Conditional expression.
   */ 
  NODE_EXPR_COND: 312,
  
  /**
   * Expression node.
   * New expression.
   */ 
  NODE_EXPR_NEW: 313,
  
  /**
   * Expression node.
   * Call expression.
   */ 
  NODE_EXPR_CALL: 314,
  
  /**
   * Expression node.
   * Member expression.
   */ 
  NODE_EXPR_MEMBER: 315,
  
  /**
   * Expression node.
   * Yield expression.
   */ 
  NODE_EXPR_YIELD: 316,
  
  /**
   * Expression node.
   * Comprehension expression.
   */ 
  NODE_EXPR_COMPREHENSION: 317,
  
  /**
   * Expression node.
   * Generator expression.
   */ 
  NODE_EXPR_GEN: 318,
  
  /**
   * Expression node.
   * Graph expression.
   */ 
  NODE_EXPR_GRAPH: 319,
  
  /**
   * Expression node.
   * GraphIndex expression.
   */ 
  NODE_EXPR_GRAPHINDEX: 320,
  
  /**
   * Expression node.
   * Let expression.
   */ 
  NODE_EXPR_LET: 321,
  
  // Patterns: 400
  /**
   * Pattern node.
   * Object pattern.
   */ 
  NODE_PTTRN_OBJ: 400,
  
  /**
   * Pattern node.
   * Array pattern.
   */ 
  NODE_PTTRN_ARRAY: 401,
  
  // Clauses: 500
  /**
   * Clause node.
   * Array clause.
   */ 
  NODE_CLAUSE_SWITCHCASE: 500,
  
  /**
   * Clause node.
   * Catch clause.
   */ 
  NODE_CLAUSE_CATCH: 501,
  
  /**
   * Clause node.
   * Comprehension block clause.
   */ 
  NODE_CLAUSE_COMPREHENSIONBLOCK: 502,
  
  /**
   * Clause node.
   * Comprehension if clause.
   */ 
  NODE_CLAUSE_COMPREHENSIONIF: 503,
  
  // Miscellaneous: 600
  /**
   * Node.
   * Identifier.
   */ 
  NODE_MISC_ID: 600,
  
  /**
   * Node.
   * Literal.
   */ 
  NODE_MISC_LITERAL: 601,

  /**
   * Unknown node.
   */
  NODE_UNKNOWN: -1
};
