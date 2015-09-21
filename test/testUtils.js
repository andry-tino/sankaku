/**
 * testUtils.js
 * Andrea Tino - 2015
 */

var fs = require('fs');

var jsConverter = require('../lib/FileManager/jsConverter.js');

var _getActiveTests = function(data) {
  var activeTests = [];
  for (var k in data) {
    if (data[k].enabled) {
      activeTests.push(data[k]);
    }
  }
  return activeTests;
};

var _getFromFile = function(filepath) {
  return fs.readFileSync(filepath, 'utf8');
};

var _getASTFromFile = function(filepath) {
  return JSON.parse(_getFromFile(filepath));
};

var _writeFile = function(content, filepath) {
  var fd = fs.openSync(filepath, 'w');
  var bytes = fs.writeSync(fd, content, 0, 'utf8');
  fs.closeSync(fd);
  
  if (bytes <= 0) {
    throw 'Error: Error while writing parseable file!';
  }
};
 
module.exports = {
  /**
  * Gets the number of enabled tests.
  * data: [interface { enabled: boolean; }*]
  * return: [number]
  */
  getActiveTestNum: function(data) {
    return _getActiveTests(data).length;
  },
  
  /**
  * Gets enabled tests.
  * data: [interface { enabled: boolean; }*]
  * return: [interface { enabled: boolean; }*]
  */
  getActiveTests: function(data) {
    return _getActiveTests(data);
  },
  
  /**
   * Fetches content of a file.
   * filepath: [string]
   * return: [string]
   */
  getFromFile: function(filepath) {
    return _getFromFile(filepath);
  },
  
  /**
   * Fetches content of a file containing a JSON AST string.
   * filepath: [string]
   * return: [object]
   */
  getASTFromFile: function(filepath) {
    return _getASTFromFile(filepath);
  },
  
  /**
   * Gets a parseable version of the js source file in input.
   * source: [string]
   * return: [string]
   */
  js2parseableJs: function(source) {
    return jsConverter().js2parseableJs(source);
  },
  
  /**
   * Writes the parseable js file version from specified file.
   * srcFilePath: [string]
   * dstFilePath: [string]
   */
  jsFile2parseableJsFile: function(srcFilePath, dstFilePath) {
    _writeFile(
      jsConverter().js2parseableJs(_getFromFile(srcFilePath)), 
      dstFilePath
    );
  }
};