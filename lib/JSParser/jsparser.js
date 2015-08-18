/**
 * jsparser.js
 * Andrea Tino - 2015 
 */

/**
 * Common interface for parsers.
 */
module.exports = function() {
  var mozillaParser = require('./mozillaParser.js');

  var parser = null;
 
  return {
    /**
     * Parser and returns AST.
     * filepath: Absolute path to file.
     */
    parse: function(filepath) {
      return mozillaParser().parse(filepath);
    }
  };
};
