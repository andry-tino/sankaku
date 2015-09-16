/**
 * typesRetrieval-testSuite-prepare.js
 * Andrea Tino - 2015
 *
 * AST test suite prepare script.
 * Execute this before running tests in this suite!
 */

var path = require('path');
var fs = require('fs');
var exec = require('child_process').execFileSync;

var files2parse = [
  'test-typesRetrieval-program1.js'
];

var path2MozJs = path.join(__dirname, '../../deps/mozjs/mozjs-31.2.0-unix-rhel');

var getFromMozJs = function(filepath) {
  var par = '--file=' + filepath;
  var buf = exec(path2MozJs, [par], { detached: false, encoding: 'utf8' });
  if (!buf) {
    throw 'Error invoking: ' + path2MozJs + '!';
  }

  // Process returned synchronously
  if (typeof buf !== 'string') {
    throw 'Error: Buffer object not expected, not supported!';
  }
  return buf;
};

for (var k in files2parse) {
  // Read js
  var inputFileName = files2parse[k] + '.js';
  var output = getFromMozJs(path.join(__dirname, inputFileName));
  // Write json
  var outputFileName = files2parse[k] + '.json';
  try {
    var fd = fs.openSync(path.join(__dirname, outputFileName), 'w');
    var bytes = fs.writeSync(fd, output, 0, 'utf8');
  } finally {
    fs.closeSync(fd);
    fd = null;
  }
  console.log('Deployed ' + inputFileName + ' -> ' + outputFileName + '!');
}
