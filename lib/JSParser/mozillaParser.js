/**
 * mozillaParser.js
 * Andrea Tino - 2015
 */

/**
 * Mozilla parser.
 */
module.exports = function() {
  var execFile = require('child_process').execFileSync;
  var path = require('path');

  var path2MozJs = '../../deps/mozjs/mozjs-unix-rhel';

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
      var ret = execFile(path2MozJs, [par]);
      if (!ret) {
        throw 'Error invoking: ' + path2MozJs + '!';
      }

      // Process returned synchronously
      var ast = ret.stdout
      if (!ast) {
        throw 'Error retrieving output from parser process!';
      }

      return ast;
    }
  };
};

