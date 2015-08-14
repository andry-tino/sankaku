/**
 * main.js
 * Andrea Tino - 2015
 */

module.exports = function() {
  var jsparser = require('./JSParser/jsparser.js');

  var source = null;
  var ast = null;

  return {
    /**
     * Initializes the system.
     * source: The ScriptSharp/JavaScript source to parse.
     */
    initialize: function(src) {
      source = src;
    },

    /**
     * Retrieves the AST.
     */
    retrieveAst: function() {
      if (!source) {
        throw 'Error: Initialization required! SS-JS source needed.';
      }

      // Calling the parser and getting JSON AST
      var jsonAst = null;
      try {
        jsonAst = jsparser.parse(source);
      } catch(e) {
        throw 'Error: Parsing was not successful!';
      }

      try {
        ast = JSON.parse(jsonAst);
      } catch(e) {
        throw 'Error: JSON AST parsing was not successful!';
      }
    },

    /**
     * Creates placeholders for classes, interfaces and enums.
     */
    createPlaceholders: function() {
    }

    stats: function() {
      if (!source || !ast) {
        throw 'Error: Cannot get stats, initialization and AST retrieval needed!';
      }

      var objectsNum = 0;
      var loopThrough = function(x) {
        for (var k in x) {
          objectsNum++;
          if (x.hasOwnProperty(k)) {
            loopThrough(x[k]);
          }
        }
      };
      try {  
        loopThrough(ast);
      } catch(e) {
        throw 'Error: Cannot get stats - ' + e.toString();
      }

      return objectsNum;
    }
  };
};
 
