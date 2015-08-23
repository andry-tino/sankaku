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
  var classes = require('./classes.js');
  var interfaces = require('./interfaces.js');
  var enums = require('./enums.js');
  var syntaxEnvironment = require('./syntaxEnvironment.js');

  // Will contain the parser and the AST browser
  var parser = null;

  var source = null;
  var jsonAst = null;
  var ast = null;
  var fm = null;
  
  // Filled at type locating phase
  var classeIds = [];
  var interfaceIds = [];
  var enumIds = [];

  // Constructor
  (function() {
    parser = jsparser(null).get();
  })();

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
      try {
        jsonAst = parser.parser.parse(fm.shadowFilePath());
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
      
      // Buinding the AST object
      parser.ast.initialize(ast);
    },

    /**
     * Locates classes, interfaces and enums.
     */
    locateTypes: function() {
      // TODO Use modules classes, interfaces and enums to retrieve types ids
    },
    
    /**
     * Builds classes, interfaces and enums.
     */
    buildTypes: function() {
      // TODO Use module syntaxEnvironment to build types
    },
    
    /**
     * Generates TypeScript file(s).
     */
    generate: function() {
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
      var len = 0;

      var loopThrough = function(x) {
        for (var k in x) {
          objectsNum++;
          if (x.hasOwnProperty(k)) {
            loopThrough(x[k]);
          }
        }
      };

      var getLen = function(x) {
        return x.length;
      };
      try {  
        //loopThrough(ast);
        len = getLen(jsonAst);
      } catch(e) {
        throw 'Error: Cannot get stats - ' + e.toString();
      }

      return { 'objectsNum': objectsNum, 'len': len };
    }
  };
};
 
