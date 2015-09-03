/**
 * mozillaAstUtils.js
 * Andrea Tino - 2015
 */

/**
 * Provides utils API for mozilla AST.
 */
module.exports = function() {
  var invalidLocation = {
    rowStart: -1,
    rowEnd: -1,
    colStart: -1,
    colEnd: -1
  };
  
  return {
    /**
     * Gets location info from an AST node.
     * node: [object]
     * return: [ASTNodeLocation]
     */
    getLocationFromNode: function(node) {
      if (!node) {
        return invalidLocation;
      }
      
      var loc = node.loc;
      if (!loc) {
        return invalidLocation;
      }
      
      return {
        rowStart: loc.start.line,
        rowEnd: loc.end.line,
        colStart: loc.start.column,
        colEnd: loc.end.column
      }; 
    }
  };
};
