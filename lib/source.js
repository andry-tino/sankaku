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
  
  var src = validateSrc(_src);

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
    }
  };
};
