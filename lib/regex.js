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
  var DOT = '\.';
  
  // Matches an identifier.
  var IDENTIFIER = '[a-zA-Z]{1}[a-zA-Z0-9]*';
  
  // Matches a number (integer).
  var NUMBER = '[0-9]+';
  
  // Matches a fully qualified name.
  var FULLY_QUALIFIED_NAME = '';
  
  return {
    /**
     * Class registration statement. 
     */
    REGISTER_CLASS_STMNT: '()\.registerClass\(\'()\'\)'
  };
};

