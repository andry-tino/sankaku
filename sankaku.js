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

// Processing
var m = main();

console.log('Initializing from file ' + filePath + '...');
m.initialize(content);

console.log('Retrieving AST...');
m.retrieveAst();
console.log('AST successfully retrieved! AST has ' + m.stats() + 'objects!');
