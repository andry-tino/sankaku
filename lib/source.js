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
    if (!src) {
      throw 'Error: src cannot be null or undefined!';
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
      
    }
  };
};
