/**
 * mozillaAstUtils.js
 * Andrea Tino - 2015
 */

/**
 * Provides utils API for mozilla AST.
 */
module.exports = function() {
  var invalidLocation = function() {
    return _buildLocation(-1, -1, -1, -1);
  };
  
  var _isValidLocation = function(rs, re, cs, ce) {
    return 
      (!rs || typeof rs !== 'number') &&
      (!re || typeof re !== 'number') &&
      (!cs || typeof cs !== 'number') &&
      (!ce || typeof ce !== 'number') &&
      (rs <= re) &&
      (cs <= ce);
  };
  
  var _buildLocation = function(rs, re, cs, ce) {
    if (!_isValidLocation(rs, re, cs, ce)) {
      throw 'Error: Invalid location! ' + JSON.stringify([rs, re, cs, ce]) + 
        ' is not a valid location!';
    }
    
    return {
      rowStart: rs,
      rowEnd: re,
      colStart: cs,
      colEnd: ce
    };
  };
  
  return {
    /**
     * Builds a location object and returns it.
     * rs: [number]
     * re: [number]
     * cs: [number]
     * ce: [number]
     * return: [ASTNodeLocation]
     */
    buildLocation: function(rs, re, cs, ce) {
      return _buildLocation(rs, re, cs, ce);
    },
    
    /**
     * Tells whether a location object is describing a possibly correct
     * excerpt of the code.
     * loc: [ASTNodeLocation]
     * return: boolean
     */
    isValidLocation: function(loc) {
      return _isValidLocation(loc.rs, loc.re, loc.cs, loc.ce);
    },
    
    /**
     * Gets location info from an AST node.
     * node: [object]
     * return: [ASTNodeLocation]
     * 
     * This will automatically chech returned location.
     */
    getLocationFromNode: function(node) {
      if (!node) {
        return invalidLocation();
      }
      
      var loc = node.loc;
      if (!loc) {
        return invalidLocation();
      }
      
      return _buildLocation(
        loc.start.line,
        loc.end.line,
        loc.start.column,
        loc.end.column
      ); 
    }
  };
};
