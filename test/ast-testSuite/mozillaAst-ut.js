/**
 * mozillaAst-ut.js
 * Andrea Tino - 2015
 * 
 * Part of: ast-testSuite
 */

var path = require('path');
var fs = require('fs');

var testData = require('./mozillaAst-ut.json');
var ast = require('../../lib/JSParser/mozillaAst.js');
var nodeTypes = require('../../lib/JSParser/nodeTypes.js');
var testUtils = require('../testUtils.js');

var types = [
  nodeTypes.NODE_PROGRAM,
  nodeTypes.NODE_STATEMENT_EMPTY,
  nodeTypes.NODE_STATEMENT_BLOCK,
  nodeTypes.NODE_STATEMENT_EXPR,
  nodeTypes.NODE_STATEMENT_IF,
  nodeTypes.NODE_STATEMENT_LABEL,
  nodeTypes.NODE_STATEMENT_BREAK,
  nodeTypes.NODE_STATEMENT_CONTINUE,
  nodeTypes.NODE_STATEMENT_WITH,
  nodeTypes.NODE_STATEMENT_SWITCH,
  nodeTypes.NODE_STATEMENT_RETURN,
  nodeTypes.NODE_STATEMENT_THROW,
  nodeTypes.NODE_STATEMENT_TRY,
  nodeTypes.NODE_STATEMENT_WHILE,
  nodeTypes.NODE_STATEMENT_DOWHILE,
  nodeTypes.NODE_STATEMENT_FOR,
  nodeTypes.NODE_STATEMENT_FORIN,
  nodeTypes.NODE_STATEMENT_FOROF,
  nodeTypes.NODE_STATEMENT_LET,
  nodeTypes.NODE_STATEMENT_DEBUG,
  nodeTypes.NODE_DECL_FUN,
  nodeTypes.NODE_DECL_VAR,
  nodeTypes.NODE_DECL_VARDCLRTR,
  nodeTypes.NODE_EXPR_THIS,
  nodeTypes.NODE_EXPR_ARRAY,
  nodeTypes.NODE_EXPR_OBJ,
  nodeTypes.NODE_EXPR_PROP,
  nodeTypes.NODE_EXPR_FUN,
  nodeTypes.NODE_EXPR_ARROW,
  nodeTypes.NODE_EXPR_SEQ,
  nodeTypes.NODE_EXPR_URY,
  nodeTypes.NODE_EXPR_BRY,
  nodeTypes.NODE_EXPR_ASSGNMT,
  nodeTypes.NODE_EXPR_UPDATE,
  nodeTypes.NODE_EXPR_LOGIC,
  nodeTypes.NODE_EXPR_COND,
  nodeTypes.NODE_EXPR_NEW,
  nodeTypes.NODE_EXPR_CALL,
  nodeTypes.NODE_EXPR_MEMBER,
  nodeTypes.NODE_EXPR_YIELD,
  nodeTypes.NODE_EXPR_COMPREHENSION,
  nodeTypes.NODE_EXPR_GEN,
  nodeTypes.NODE_EXPR_GRAPH,
  nodeTypes.NODE_EXPR_GRAPHINDEX,
  nodeTypes.NODE_EXPR_LET,
  nodeTypes.NODE_PTTRN_OBJ,
  nodeTypes.NODE_PTTRN_ARRAY,
  nodeTypes.NODE_CLAUSE_SWITCHCASE,
  nodeTypes.NODE_CLAUSE_CATCH,
  nodeTypes.NODE_CLAUSE_COMPREHENSIONBLOCK,
  nodeTypes.NODE_CLAUSE_COMPREHENSIONIF,
  nodeTypes.NODE_MISC_ID,
  nodeTypes.NODE_MISC_LITERAL
];

var getFromFile = function(filepath) {
  return fs.readFileSync(filepath, 'utf8');
};

var testTypeAssociation = function(test, value, actual, expected, message) {
  var errorMessage = message + '! Expected: \'' + expected + '\', got: \'' + actual + 
    '\' from value: \'' + JSON.stringify(value) + '\'!';
  test.strictEqual(actual, expected, errorMessage);
};

var testNodesCount = function(test, nodetype, actual, expected, message) {
  var errorMessage = message + '! Expected: \'' + expected + 
    '\' nodes of type: \'' + nodetype + '\' being browsed, got: \'' + actual + '\'!';
  test.strictEqual(actual, expected, errorMessage);
};

module.exports = {
  /**
   * Initializes the test.
   */
  setUp: function(callback) {
    if (callback) callback();
  },
  
  /**
   * Test cleanup.
   */
  tearDown: function(callback) {
    if (callback) callback();
  },

  /**
   * Testing the ability of browsing all nodes.
   */
  browseAllNodes: function(test) {
    test.expect(1 * testUtils.getActiveTestNum(testData.programs));
    
    var nodeBrowser = ast();
    
    var items = testUtils.getActiveTests(testData.programs);   
    for (var k in items) {
      var count = 0;
      var callback = function(nodeData) {
        count++;
      };
      
      var astString = getFromFile(path.join(__dirname, items[k].fileName + '.json'));
      var astObj = JSON.parse(astString);
      nodeBrowser.initialize(astObj);
      
      // Check that callback is called as many times as many nodes in the program
      nodeBrowser.browseThrough(callback);
      testNodesCount(test, 'none', count, items[k].expected.all.count, ' - Nodes being browsed do not match!');
    }
    
    test.done();
  },
  
  /**
   * Testing the ability of browsing specific node types.
   */
  browseNodesByType: function(test) {
    test.expect(1 * types.length * testUtils.getActiveTestNum(testData.programs));
    
    var nodeBrowser = ast();
    
    var items = testUtils.getActiveTests(testData.programs);   
    for (var k in items) {
      var astString = getFromFile(path.join(__dirname, items[k].fileName + '.json'));
      var astObj = JSON.parse(astString);
      nodeBrowser.initialize(astObj);
      
      // Check every type
      for (var j in types) {
        var count = 0;
        var callback = function(nodeData) {
          count++;
        };
         
        nodeBrowser.browseThroughNode(types[j], callback);
        testNodesCount(test, types[j], count, items[k].expected.types['' + types[j]].count, ' - Nodes being browsed do not match!');
      }
    }
    
    test.done();
  },
  
  /**
   * Testing that data browsing correctly calls the 
   * callback and passes to it the correct data.
   */
  callCallbackAndPassNodeDataAsArgument: function(test) {
    var items = testUtils.getActiveTests(testData.programs);

    var assertionsCount = 0;
    for (var k in items) {
      assertionsCount += items[k].expected.all.count;
    }

    test.expect(3 * assertionsCount);
    
    var nodeBrowser = ast();
    
    // Test that the argument has a value of type [ASTNodeData]
    var callback = function(nodeData) {
      test.ok(nodeData, 'Node data should not be null!');
      test.ok(nodeData.type, 'Property `type` of node data should not be null!');
      test.ok(nodeData.node, 'Property `node` of node data should not be null!');
    };
    
    var items = testUtils.getActiveTests(testData.programs);   
    for (var k in items) {
      var astString = getFromFile(path.join(__dirname, items[k].fileName + '.json'));
      var astObj = JSON.parse(astString);
      nodeBrowser.initialize(astObj);
      
      nodeBrowser.browseThrough(callback);
    }
    
    test.done();
  },

  /**
   * Testing that data browsing correctly calls the 
   * callback and passes to it the correct data.
   * This test particularly focuses on the browsing capability which
   * allows filtering by node type.
   */
  callCallbackAndPassNodeDataAsArgumentForNodeType: function(test) {
    var items = testUtils.getActiveTests(testData.programs);

    var assertionsCount = 0;
    for (var k in items) {
      assertionsCount += items[k].expected.all.count;
    }
    
    test.expect(3 * assertionsCount);
    
    var nodeBrowser = ast();
       
    for (var k in items) {
      var astString = getFromFile(path.join(__dirname, items[k].fileName + '.json'));
      var astObj = JSON.parse(astString);
      nodeBrowser.initialize(astObj);
      
      // Check every type
      for (var j in types) {
        var callback = function(nodeData) {
          test.ok(nodeData, 'Node data should not be null!');
          test.ok(nodeData.type, 'Property `type` of node data should not be null!');
          test.ok(nodeData.node, 'Property `node` of node data should not be null!');
        };
         
        nodeBrowser.browseThroughNode(types[j], callback);
      }
    }
    
    test.done();
  }, 

  /**
   * Testing node associations to node types.
   */
  nodeTypeAssociations: function(test) {
    test.expect(2 * testUtils.getActiveTestNum(testData.associations));
    
    var typeEvaluator = ast().nodeType;
    
    var items = testUtils.getActiveTests(testData.associations);   
    for (var k in items) {
      var astString = getFromFile(path.join(__dirname, items[k].fileName + '.json'));
      var astObj = JSON.parse(astString);
      
      // This test needs to have the AST object in a variable called `x`
      var x = astObj;
      var value = eval(items[k].jsonNodeAccessPath);
      
      test.ok(value, 'We should get a value from JS evaluation!');
      testTypeAssociation(test, value, typeEvaluator(value), items[k].expected.type, items[k].description + ' - Type not correct!');
    }
    
    test.done();
  }
};
 
