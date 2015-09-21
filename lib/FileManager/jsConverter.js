/**
 * jsConverter.js
 * Andrea Tino - 2015
 */

/**
 * Encapsulates reausable logic for converting Javascript parseable Javascript.
 */
module.exports = function() {
  var text = require('../text.js');

  // Private functions
  var escapeContent = function(str) {
    return text().jsEscape(str);
  };

  // Adds opening and closing quotes in case thet are not present
  var handleOpeningAndClosingQuotes = function(str) {
    str = (str[0] === '\"' ? '' : '\"') + str;
    str = str + (str[str.length - 1] === '\"' ? '' : '\"');
  };

  return {
    /**
     * Get a parseable js from anormal js.
     * js: [string] - Javascript code
     * return: [string]
     */
    js2parseableJs: function(js) {
      var pjs = escapeContent(js);
      handleOpeningAndClosingQuotes(pjs);
      pjs = 'print(JSON.stringify(Reflect.parse(' + pjs + ')));';
      return pjs;
    }
  };
};

