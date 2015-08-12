/**
 * mozillaParser.js
 * Andrea Tino - 2015
 */

module.exports = function() {
  var spawn = require('child_process').spawnSync;

  var path2MozJs = '../../deps/mozjs/mozjs-unix-rhel';

  return {
    /**
     * Parses the input string and returns AST.
     */
    parse: function(input) {
      var ret = spawn(path2MozJs, []);
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

