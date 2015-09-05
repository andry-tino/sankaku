/**
 * mozillaAstUtils.js
 * Andrea Tino - 2015
 */

/**
 * Provides utils API for mozilla AST.
 */
module.exports = function() {
  var _isValidLocation = function(rs, re, cs, ce) {
    var isValid =  true;
    isValid = isValid && rs && (typeof rs === 'number');
    isValid = isValid && re && (typeof re === 'number');
    isValid = isValid && cs && (typeof cs === 'number');
    isValid = isValid && ce && (typeof ce === 'number');
    isValid = isValid && (rs <= re);
    isValid = isValid && (cs <= ce);
    return isValid;
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

  var invalidLocation = function() {
    return _buildLocation(-1, -1, -1, -1);
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
     * Prints location.
     * loc: [ASTNodeLocation]
     * return: [string]
     */
    printLocation: function(loc) {
      if (!loc) {
        return '@?';
      }
      return '@' + 
        loc.rowStart + '-' + loc.colStart + ':' + 
        loc.rowEnd + '-' + loc.colEnd;
    },
    
    /**
     * Tells whether a location object is describing a possibly correct
     * excerpt of the code.
     * loc: [ASTNodeLocation]
     * return: boolean
     */
    isValidLocation: function(loc) {
      return _isValidLocation(
        loc.rowStart, 
        loc.rowEnd, 
        loc.colStart, 
        loc.colEnd
      );
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
