/**
 * jsparser.js
 * Andrea Tino - 2015 
 */

module.exports = function() {
  var mozillaParser = require('./mozillaParser.js');

  var parser = null;
 
  return {
    /**
     * Parser and returns AST.
     */
    parse: function(input) {
      return mozillaParser().parse(input);
    }
  };
};
