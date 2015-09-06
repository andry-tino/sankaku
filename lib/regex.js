/**
 * regex.js
 * Andrea Tino - 2015
 */

/**
 * Regular expressions.
 */
module.exports = function() {
  var tokens = require('./tokens.js');

  var r = function() {
    var regex = '';
    for (var k in arguments) {
      regex += arguments[k].source;
    }
    return new RegExp(regex);
  };

  // Attention
  // We need to use .source on regex objects instead of strings when encountering
  // escapes like '\'. That is because we build regexes using concatenation
  // which will create problems with those escape characters.

  // Matches a single or double quote.
  // Number of groups: 0.
  var QUOTE = /[\'\"]{1}/.source;
  
  // Matches oop dot accessor.
  // Number of groups: 0.
  var DOT = /\./.source;

  // Matches a comma.
  // Number of groups: 0.
  var COMMA = /\,/.source;

  // Matches a comma.
  // Number of groups: 0.
  var SEMICOLON = /\;/.source;

  // Matches a single space.
  // Number of groups: 0.
  var SINGLE_SPACE = /\s/.source;

  // Matches one or more spaces.
  // Number of groups: 0.
  var MULTIPLE_SPACE = /\s+/.source;

  // Matches zero or more spaces.
  // Number of groups: 0.
  var MANDATORY_MULTIPLE_SPACE = /\s*/.source;

  // Matches an identifier.
  // Number of groups: 0.
  var IDENTIFIER = /[a-zA-Z]{1}[a-zA-Z0-9]*/.source;
  
  // Matches a number (integer).
  // Number of groups: 0.
  var NUMBER = /[0-9]+/.source;

  // Matches open bracket.
  // Number of groups: 0.
  var OPEN_ROUND_BRACKET = /\(/.source;

  // Matches close bracket.
  // Number of groups: 0.
  var CLOSE_ROUND_BRACKET = /\)/.source;
  
  // Matches a fully qualified name (IDENTIFIER[.IDENTIFIER]*).
  // Attention: a FQN can also be a normal identifier.
  // Number of groups: 2.
  var _FULLY_QUALIFIED_NAME = new RegExp(
    '(' + IDENTIFIER + '){1}(' + DOT + IDENTIFIER + ')*'
  ).source;
  
  // Each uppercase member exposed has interface [RegexUnit].
  // Remember that handlers, according to their interface, must correctly handle null
  return {
    /**
     * Fully qualified name.
     * <id>.<id>...<id>
     */
    FULLY_QUALIFIED_NAME: {
      regex: _FULLY_QUALIFIED_NAME,
      handler: function(matches) { 
        if (!matches) {
          return null;
        }
        // We are interested mostly in the last identifier
        var removeDot = function(value) {
          if (!value) {
            return;
          }
          return value.replace(/\./g, '');
        };
        // Also remember that when we have a FQN consisting in only one ID
        // then FIRST_IDENTIFIER_NAME and LAST_IDENTIFIER_NAME must be the same
        var numberOfIds = function() {
          return matches[0].split(/\./).length;
        };
        var getLastIdentifier = function() {
          var idsNum = numberOfIds();
          return (idsNum > 1) ? removeDot(matches[2]) : matches[1];
        }
        return {
          matched: true,
          ALL: matches[0],
          FIRST_IDENTIFIER_NAME: matches[1],
          LAST_IDENTIFIER_NAME: getLastIdentifier()
        };
      }
    },

    /**
     * Class registration statement.
     * <...>.registerClass('<...>', <...>);
     */
    REGISTER_CLASS_STMNT: {
      regex: '(' + _FULLY_QUALIFIED_NAME + ')' + // 3 groups
             DOT +
             'registerClass' +
             OPEN_ROUND_BRACKET +
             // Class name in quotes
             QUOTE +
             '(' + _FULLY_QUALIFIED_NAME + ')' + // 3 groups
             QUOTE +
             // Base class
             COMMA +
             MANDATORY_MULTIPLE_SPACE +
             '(' + _FULLY_QUALIFIED_NAME + ')' + // 3 groups
             // Interface 1
             '(' + // 1 group
             COMMA +
             '(' + _FULLY_QUALIFIED_NAME + ')' + // 3 groups
             ')?' +
             // Interface 2
             '(' + // 1 group
             COMMA +
             '(' + _FULLY_QUALIFIED_NAME + ')' + // 3 groups
             ')?' +
             // Interface 3
             '(' + // 1 group
             COMMA +
             '(' + _FULLY_QUALIFIED_NAME + ')' + // 3 groups
             ')?' +
             // Interface 4
             '(' + // 1 group
             COMMA +
             '(' + _FULLY_QUALIFIED_NAME + ')' + // 3 groups
             ')?' +
             // Interface 5
             '(' + // 1 group
             COMMA +
             '(' + _FULLY_QUALIFIED_NAME + ')' + // 3 groups
             ')?' +
             // Interface 6
             '(' + // 1 group
             COMMA +
             '(' + _FULLY_QUALIFIED_NAME + ')' + // 3 groups
             ')?' +
             // Closing
             CLOSE_ROUND_BRACKET +
             SEMICOLON +
             '?',
      handler: function(matches) { 
        if (!matches) {
          return null;
        }
        // Up to 6 interfaces are supported
        return {
          matched: true,
          ALL: matches[0],
          CLASS_NAME1: matches[1],
          CLASS_NAME2: matches[4],
          BASE_CLASS_NAME: matches[7],
          INTERFACE_NAME1: matches[11],
          INTERFACE_NAME2: matches[15],
          INTERFACE_NAME3: matches[19],
          INTERFACE_NAME4: matches[23],
          INTERFACE_NAME5: matches[27],
          INTERFACE_NAME6: matches[31]
        };
      }
    },
    
    /**
     * Evaluates a string patterns, turns it into a regular expression and get matches.
     * pattern: [string] - Regex string.
     * str: [string] - String to match.
     * 
     * This is actually a wrapper aroung RegExp.exec.
     */
    match: function(pattern, str) {
      var regexp = new RegExp(pattern, 'g');
      return regexp.exec(str);
    }
  };
};
