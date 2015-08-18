/**
 * mozillaParser.js
 * Andrea Tino - 2015
 */

/**
 * Mozilla parser.
 */
module.exports = function() {
  var spawn = require('child_process').spawnSync;

  var path2MozJs = '../../deps/mozjs/mozjs-unix-rhel';

  return {
    /**
     * Parses a file and returns AST.
     * filepath: Absolute path to file.
     */
    parse: function(filepath) {
      var par = '--file=' + filepath;
      var ret = spawn(path2MozJs, [par]);
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

