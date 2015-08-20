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
var filepath = program.args[program.args.length - 1];
if (!filepath) {
  throw 'Error: invalid path!';
}

// Processing
var m = main();

console.log('Initializing from file ' + filepath + '...');
m.initialize(filepath);

console.log('Retrieving AST...');
m.retrieveAst();
console.log('AST successfully retrieved! AST stats: ' + JSON.stringify(m.stats()));
