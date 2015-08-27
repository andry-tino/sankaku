#!/usr/bin/env node

/**
 * testRunner.js
 * Andrea Tino - 2015
 */
 
 var nodeunit = require('nodeunit');
 var regexTestSuite = require('regex-ut.js');
 
 nodeunit.runModule(regexTestSuite);
 