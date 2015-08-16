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
      var output = source;
      
      // Handle single and double quotes
      output = output.replace(/\'/g, '\'');
      output = output.replace(/\"/g, '\"');
      
      // Handle carriage return
      output = output.replace(/\r\n/g, '');
      output = output.replace(/\n/g, '');
      
      return output
    }
  };
};

