/**
 * regex.js
 * Andrea Tino - 2015
 */

/**
 * Regular expressions.
 */
module.exports = function() {
  var tokens = require('./tokens.js');
  
  // Matches a single or double quote.
  var QUOTE = '[\'\"]{1}';
  
  // Matches oop dot accessor.
  var DOT = tokens.LITERAL_DOT;
  
  // Matches an identifier.
  var IDENTIFIER = '[a-zA-Z]{1}[a-zA-Z0-9]*';
  
  // Matches a number (integer).
  var NUMBER = '[0-9]+';
  
  // Matches a fully qualified name (IDENTIFIER[.IDENTIFIER]*).
  // Attention: a FQN can also be a normal identifier.
  var FULLY_QUALIFIED_NAME = '(ID){1}(\.ID)*';
  
  // Each value exposed has interface [RegexUnit].
  return {
    /**
     * Class registration statement. 
     */
    REGISTER_CLASS_STMNT: {
      regex: '()\.registerClass\(\'()\'\)',
      handler: function(o) { }
    }
  };
};

