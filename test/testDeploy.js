#!/usr/bin/env node

/**
 * testDeploy.js
 * Andrea Tino - 2015
 *
 * Run this before running any test.
 */

var path = require('path');
var exec = require('child_process').execFileSync;

// Tests to deploy
var deploy = [
  { 
    description: 'Regex test suite', 
    path: null 
  },
  { 
    description: 'Source test suite', 
    path: null 
  },
  { 
    description: 'Source Loader test suite', 
    path: null 
  },
  { 
    description: 'Types Retrieval test suite', 
    path: null 
  },
  { 
    description: 'AST test suite', 
    path: path.join(__dirname, 'ast-testSuite/ast-testSuite-deploy.js') 
  }
];

(function() {
  for (var k in deploy) {
    if (!deploy[k].path) {
      console.log(deploy[k].description + ' - Skipped, nothing to deploy!');
      continue;
    }
    // Deploy this test suite
    var bytes = exec(deploy[k].path, [], { detached: false, encoding: 'utf8' })
    console.log(deploy[k].description + ' - Deployed!');
  }
})(deploy);
