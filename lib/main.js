/**
 * main.js
 * Andrea Tino - 2015
 */

/**
 * Main entry point for the program. 
 */
module.exports = function() {
  var jsparser = require('./JSParser/jsparser.js');
  var fileManager = require('./FileManager/fileManager.js');

  var source = null;
  var ast = null;
  var fm = null;

  return {
    /**
     * Initializes the system.
     * filepath: The file path containing the Javascript source to parse.
     *
     * Retrieves the source.
     * Creates the shadow file so that js parser will be able to parse it later.
     */
    initialize: function(filepath) {
      fm = fileManager(filepath);
      fm.createShadowFile();
      source = fm.source();
    },

    /**
     * Retrieves the AST.
     */
    retrieveAst: function() {
      if (!fm) {
        throw 'Error: Initialization required!';
      }

      // Calling the parser and getting JSON AST
      var jsonAst = null;
      try {
        jsonAst = jsparser().parse(fm.shadowFilePath());
      } catch(e) {
        throw 'Error: Parsing of ' + fm.shadowFilePath() + ' was not successful!';
      }

      try {
        ast = JSON.parse(jsonAst);
      } catch(e) {
        throw 'Error: JSON AST parsing was not successful!';
      }

      // TODO Parametrize this
      //fm.removeShadowFile(); // Activate it to remove the shadow file
    },

    /**
     * Creates placeholders for classes, interfaces and enums.
     */
    createPlaceholders: function() {
      // TODO
    },

    /**
     * Gets statistics.
     */ 
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
 
