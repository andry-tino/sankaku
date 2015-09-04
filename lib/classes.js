/**
 * classes.js
 * Andrea Tino - 2015
 */

/**
 * Detects and collects classes in the ScriptSharp source code.
 */
module.exports = function() {
  var nodeTypes = require('./JSParser/nodeTypes.js');
  var astUtils = require('./JSParser/mozillaAstUtils.js');
  var regex = require('./regex.js');
  
  var astBrowser = null; // [ASTBrowser]
  var srcBrowser = null; // [SourceBrowser]
  
  return {
    /**
     * Initializes the module.
     * _ast: [ASTBrowser] - A valid AST browser.
     * _src: [SourceBrowser] - A valid source locator.
     */
    initialize: function(_ast, _src) {
      if (!ast) {
        throw 'Error: AST cannot be null or undefined!';
      }
      if (!src) {
        throw 'Error: Source cannot be null or undefined!';
      }
      
      astBrowser = _ast;
      srcBrowser = _src;
    },
    
    /**
     * Locates classes in the AST and stores all ids.
     * return: [RegexMatches*] - The array of class regex matches found.
     */
    retrieveTypes: function() {
      if (!astBrowser || !srcBrowser) {
        throw 'Error: Initialization needed!';
      }
      
      var classRegexMatchess = []; // [RegexMatches*]
      var astUtility = astUtils();
      var regExp = regex();
      
      astBrowser.browseThroughNode(nodeTypes.NODE_STATEMENT_EXPR, function(d) { // d: [ASTNodeData]
        // 1. Get AST node.
        var node = d.node; // [object]
        
        // 2. Retrieve location information from AST node.
        // Check of returned location object performed by getLocationFromNode!
        var loc = astUtility.getLocationFromNode(node);
        
        // 3. Retrieve code from source given location object in AST.
        var excerpt = srcBrowser.at(loc);
        
        // 4. Check matches with class definition statements
        var matches = regExp.REGISTER_CLASS_STMNT.handler(
          regExp.match(regExp.REGISTER_CLASS_STMNT.regex, excerpt)
        );
        
        if (matches || matches.matched) {
          classRegexMatchess.push(null); // We can add it
        }
      });
      
      return classRegexMatchess;
    }
  };
};

