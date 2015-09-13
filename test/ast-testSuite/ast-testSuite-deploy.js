/**
 * ast-testSuite-prepare.js
 * Andrea Tino - 2015
 *
 * AST test suite prepare script.
 * Execute this before running tests in this suite!
 */

var path = require('path');
var fs = require('fs');
var exec = require('child_process').execFileSync;

var files2parse = [
  // Browse functions tests
  'test-mozillaAst-program1',
  // Associations tests
  'test-mozillaAst-type100',
  'test-mozillaAst-type101',
  'test-mozillaAst-type102',
  'test-mozillaAst-type103',
  'test-mozillaAst-type104',
  'test-mozillaAst-type105',
  'test-mozillaAst-type106',
  'test-mozillaAst-type107',
  'test-mozillaAst-type108',
  'test-mozillaAst-type109',
  'test-mozillaAst-type110',
  'test-mozillaAst-type111',
  'test-mozillaAst-type112',
  'test-mozillaAst-type113',
  'test-mozillaAst-type114',
  'test-mozillaAst-type115',
  'test-mozillaAst-type116',
  'test-mozillaAst-type117',
  'test-mozillaAst-type118',
  'test-mozillaAst-type200',
  'test-mozillaAst-type201',
  'test-mozillaAst-type202',
  'test-mozillaAst-type300',
  'test-mozillaAst-type301',
  'test-mozillaAst-type302',
  'test-mozillaAst-type303',
  'test-mozillaAst-type304',
  'test-mozillaAst-type305',
  'test-mozillaAst-type306',
  'test-mozillaAst-type307',
  'test-mozillaAst-type308',
  'test-mozillaAst-type309',
  'test-mozillaAst-type310',
  'test-mozillaAst-type311',
  'test-mozillaAst-type312',
  'test-mozillaAst-type313',
  'test-mozillaAst-type314',
  'test-mozillaAst-type315',
  'test-mozillaAst-type316',
  'test-mozillaAst-type317',
  'test-mozillaAst-type318',
  'test-mozillaAst-type319',
  'test-mozillaAst-type320',
  'test-mozillaAst-type321',
  'test-mozillaAst-type400',
  'test-mozillaAst-type401',
  'test-mozillaAst-type500',
  'test-mozillaAst-type501',
  'test-mozillaAst-type502',
  'test-mozillaAst-type503',
  'test-mozillaAst-type600',
  'test-mozillaAst-type601'
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
