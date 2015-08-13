#!/usr/bin/env node

/**
 * sankaku.js
 * Andrea Tino - 2015
 */

var program = require('commander');
var fs = require('fs');

var pkg = require('./package.json');
var main = require('./lib/main.js');

// Processing arguments
program
  .version(pkg.version)
  .usage(pkg.name + ' [options] file')
  .option('-s, --separate', 'Generate separate files per type')
  .parse(process.argv);

// Validating arguments
var filePath = program.args[program.args.length - 1];
if (!filePath) {
  throw 'Error: invalid path!';
}
console.log('Reading file ' + filePath + '...');

var content = null;
try {
  content = fs.readFileSync(filePath); 
} catch(e) {
  throw 'Error loading file!';
}
console.log('File read successfully!');

