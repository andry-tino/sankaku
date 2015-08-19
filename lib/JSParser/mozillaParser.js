/**
 * mozillaParser.js
 * Andrea Tino - 2015
 */

/**
 * Mozilla parser.
 */
module.exports = function() {
  var exec = require('child_process').execFileSync;
  var path = require('path');

  var path2MozJs = 'deps/mozjs/mozjs-31.2.0-unix-rhel';

  // Constructor
  (function() {
    path2MozJs = path.resolve(path2MozJs);
  })();

  return {
    /**
     * Parses a file and returns AST.
     * filepath: Absolute path to file.
     */
    parse: function(filepath) {
      var par = '--file=' + filepath;
      var buf = exec(path2MozJs, [par], { detached: false, encoding: 'utf8' });
      if (!buf) {
        throw 'Error invoking: ' + path2MozJs + '!';
      }

      // Process returned synchronously
      if (typeof buf !== 'string') {
        // This is a buffer object
        throw 'Error: Buffer object not expected, not supported!';
      }

      return buf;
    }
  };
};

