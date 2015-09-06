/**
 * source.js
 * Andrea Tino - 2015
 */

/**
 * Extracts parts from the source code basing on line number and column number.
 * This module implements interface [SourceBrowser].
 * _src: [string] - Source code to provide
 */
module.exports = function(_src) {
  var astUtils = require('./JSParser/mozillaAstUtils.js');
  
  /**
   * This constant is extremely important because of the source handling process.
   * The source might span more lines. In order to identify lines, we need to do this:
   * 1. Split by this character.
   * 2. Work on the array of lines.
   * 3. When returning an excerpt, we combine lines with this character.
   */
  var NEWLINE_TOKEN = '\\n';
  
  var validateSrc = function(src) {
    if (!src || src.lenght <= 0) {
      throw 'Error: src cannot be null, undefined or an empty string!';
    }
    return src;
  };
  
  // Converts to array for each
  var processSrc = function(src) {
    // In different platforms we can have the following options for newline characters:
    // 1. \n\r
    // 2. \n
    // We replace all of them with the last, so we are sure that we locate all lines.
    return src.replace(/\n\r/g, NEWLINE_TOKEN).split(/\n/);
  };
  
  var src = processSrc(validateSrc(_src)); // [string*] Array of lines
  var locationUtils = astUtils();

  // Private functions
  // Attention: s and e observe 1-based index convention
  var extract = function(str, s, e) {
    return str.substring(s - 1, e);
  };

  return {
    /**
     * Extracts source code at provided line number and col number.
     * Indexing is performed on 1-based approach, consider the following:
     *    00000000011111111112222222222333333333
     *    12345678901234567890123456789012345678
     *    ......................................
     *  1.Odi et amo
     *  2.Quare id faciem, fortasse nequiris
     *  3.Nescio! Sed fieri sentio, et excrucior
     *
     * loc: [ASTNodeLocation]
     * return: [string]
     */
    at: function(loc) {
      if (!locationUtils.isValidLocation(loc)) {
        throw 'Error: ' + JSON.stringify(loc) + ' is not a valid location!';
      }

      var lines = [];
      for (var r = loc.rowStart - 1; r < loc.rowEnd; r++) {
        lines.push(src[r]);
      }
      
      if (lines.length === 1) {
        return extract(lines[0], loc.colStart, loc.colEnd);
      }
      
      // Spanning more lines
      lines[0] = extract(lines[0], loc.colStart, lines[0].length - 1);
      lines[lines.length - 1] = extract(lines[lines.length - 1], 0, loc.colEnd);
      
      var singleLine = '';
      for (var l in lines) {
        singleLine += lines[l] + (l === lines.length - 1 ? '' : NEWLINE_TOKEN);
        singleLine += lines[l];
      }
      return singleLine;
    },
    
    /**
     * Gets a line. 
     * l: Line number.
     */
    line: function(l) {
      if (!l || typeof l !== 'number') {
        throw 'Error: Line must be a number!';
      }
      return src[l];
    }
  };
};
