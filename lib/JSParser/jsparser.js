/**
 * jsparser.js
 * Andrea Tino - 2015 
 */

/**
 * Common interface for parsers.
 * This acts as a factory for getting the proper parser and AST browser.
 * _config: { }
 */
module.exports = function(_config) {
  var mozillaParser = require('./mozillaParser.js');
  var mozillaAst = require('./mozillaAst.js');

  var validateConfig = function(config) {
    return config;
  };

  var config = validateConfig(_config);
 
  return {
    /**
     * Gets the proper parser and AST browser.
     */
    get: function() {
      return {
        parser: mozillaParser(),
        ast: mozillaAst()
      };
    }
  };
};
