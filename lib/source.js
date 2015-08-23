/**
 * source.js
 * Andrea Tino - 2015
 */

/**
 * Extracts parts from the source code basing on line number and column number.
 * _src: Source code to provide
 */
module.exports = function(_src) {
  var validateSrc = function(src) {
    if (!src || src.lenght <= 0) {
      throw 'Error: src cannot be null, undefined or an empty string!';
    }
    return src;
  };
  
  // Converts to array for each
  var processSrc = function(src) {
    return src.replace(/\n\r/g, '\n').split('\n');
  };
  
  var src = processSrc(validateSrc(_src)); // Array of lines
  
  // Private functions
  var extract = function(str, s, e) {
    return str.substring(s, e);
  };

  return {
    /**
     * Extracts source code at provided line number and col number.
     * rs: Row start.
     * re: Row end.
     * cs: Col start.
     * ce: Col end.
     */
    at: function(rs, re, cs, ce) {
      if (!rs || typeof rs !== 'number') {
        throw 'Error: Row start must be a number!';
      }
      if (!re || typeof re !== 'number') {
        throw 'Error: Row end must be a number!';
      }
      if (!cs || typeof cs !== 'number') {
        throw 'Error: Col start must be a number!';
      }
      if (!ce || typeof ce !== 'number') {
        throw 'Error: Col end must be a number!';
      }
      if (re < rs) {
        throw 'Error: Row end must be greater or equal than row start!';
      }
      if (ce < cs) {
        throw 'Error: Col end must be greater or equal than col start!';
      }
      
      var lines = [];
      for (var r = rs; r <= re; r++) {
        lines.push(src[r]);
      }
      
      if (lines.length === 1) {
        return extract(lines[0] cs, ce);
      }
      
      // Spanning more lines
      lines[0] = extract(lines[0], cs, lines[0].length - 1);
      lines[lines.length - 1] = extract(lines[lines.length - 1], 0, ce);
      
      var singleLine = '';
      for (var l in lines) {
        //singleLine += lines[l] + (l === lines.length - 1 ? '' : '\n');
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
