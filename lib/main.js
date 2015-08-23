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
  var source = require('./source.js');

  // Will contain the parser and the AST browser
  var parser = null;
  var fm = null;

  var srcString = null; // The original js source string
  var src = null; // Source locator
  var jsonAst = null; // JSON string representing the AST
  var ast = null; // Object AST
  
  // Filled at type locating phase
  var classIds = [];
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
      srcString = fm.source();
      
      // Initializing the source locator
      src = source(srcString);
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
      
      // Now we can initialize the AST browser
      parser.ast.initialize(ast);
    },

    /**
     * Locates classes, interfaces and enums.
     */
    locateTypes: function() {
      if (!ast) {
        throw 'Error: AST needed for this!';
      }
      
      // Locating classes
      var classesLocator = classes();
      classesLocator.initialize(parser.ast, src);
      classIds = classesLocator.retrieveTypes();
      
      // Locating interfaces
      var interfacesLocator = interfaces();
      interfacesLocator.initialize(parser.ast, src);
      interfaceIds = interfacesLocator.retrieveTypes();
      
      // Locating enums
      var enumsLocator = enums();
      enumsLocator.initialize(parser.ast, src);
      enumIds = enumsLocator.retrieveTypes();
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
      if (!srcString || !ast) {
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
 
