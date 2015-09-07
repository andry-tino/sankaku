/**
 * testUtils.js
 * Andrea Tino - 2015
 */
 
var _getActiveTests = function(data) {
  var activeTests = [];
  for (var k in data) {
    if (data[k].enabled) {
      activeTests.push(data[k]);
    }
  }
  return activeTests;
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
  }
};