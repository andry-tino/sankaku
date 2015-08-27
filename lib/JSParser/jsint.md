# Describing interfaces in directory

## Interface `Parser`
Describes an object capable of parsing ScriptSharp/JavaScript code source files.

    interface Parser = {
      parse: function(filepath: number) -> string;
    }

**Member `parse`** is a function:

1. `filepath`: Path (expected absolute) to the file.
2. `return`: Returns the string JSON AST derived from `filepath`.

## AST browsing
These interfaces allow AST browsing.

### Interface `ASTNodeType`
Describes an object capable of describing a node in an AST.

    interface ASTNodeType = number

It is an enumeration.

### Interface `ASTNodeCallback`
Describes an object capable of doing actions on an AST node.

    interface ASTNodeData = {
      type: ASTNodeType;
      node: object;
    }

Where:

1. `type`: An enumeration describing the type of node.
2. `node`: The node object.

### Interface `ASTBrowser`
Describes an object capable of browsing an AST tree.

    interface ASTBrowser <: Initializable = {
      initialize: function(ast: object) -> void;
      browseThrough: function(callback: function(nodeData: ASTNodeData) -> void) -> void;
      browseThroughNode: function(nodeType: ASTNodeType, callback: function(nodeData: ASTNodeData) -> void) -> void;
    }

**Member `initialize`** is a function:

1. `ast`: The AST object that the browser will browse.

**Member `browseThrough`** is a function which iterates every node (first level) of the AST, and will execute `callback` everytime passing details of that node to it:

1. `callback`: The function to call to which node data will be passed.

**Member `browseThrough`** is a function which iterates every node (first level) of the AST, and will execute `callback` everytime passing details of that node to it. This function will iterate only on nodes of a certain type:

1. `callback`: The function to call to which node data will be passed.
2. `nodeType`: The type of nodes to be iterated.
