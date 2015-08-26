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
  // Number of groups: 0.
  var QUOTE = '[\'\"]{1}';
  
  // Matches oop dot accessor.
  // Number of groups: 0.
  var DOT = '\.';
  
  // Matches an identifier.
  // Number of groups: 0.
  var IDENTIFIER = '[a-zA-Z]{1}[a-zA-Z0-9]*';
  
  // Matches a number (integer).
  // Number of groups: 0.
  var NUMBER = '[0-9]+';
  
  // Matches a fully qualified name (IDENTIFIER[.IDENTIFIER]*).
  // Attention: a FQN can also be a normal identifier.
  // Number of groups: 2.
  var FULLY_QUALIFIED_NAME = '(ID){1}(\.ID)*';
  
  // Each value exposed has interface [RegexUnit].
  // Remember that handlers, according to their interface, must correctly handle null
  return {
    /**
     * Class registration statement.
     * <...>.registerClass('<...>', <...>);
     */
    REGISTER_CLASS_STMNT: {
      regex: '(' + FULLY_QUALIFIED_NAME + ')' + // 3 groups
             DOT +
             'registerClass' +
             '\(' +
             QUOTE +
             '(' + FULLY_QUALIFIED_NAME + ')' + // 3 groups
             QUOTE +
             '\,' +
             '(' + FULLY_QUALIFIED_NAME + ')' + // 3 groups
             '\)' +
             '\;?',
      handler: function(matches) { 
        if (!matches) {
          return null;
        }
        return {
          ALL: matches[0],
          CLASS_NAME1: matches[1],
          CLASS_NAME2: matches[4],
          BASE_CLASS_NAME: matches[7]
        };
      }
    }
  };
};

