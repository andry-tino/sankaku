/**
 * text.js
 * Andrea Tino - 2015
 */

/**
 * Handling text.
 */
module.exports = function() {
  return {
    /**
     * Escapes Javascript text so that it is possible to include it in quotes.
     */ 
    jsEscape: function(source) {
      return JSON.stringify(source);
    }
  };
};

