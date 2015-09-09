# Describing interfaces in directory

## Interface `Initializable`
Describes an object that needs initialization.

    interface Initializable = {
      initialize: function(...) -> void;
    }

**Member `initialize`** is a function initializing the object. It returns nothing and can have multiple arguments.


## Interface `SourceBrowser`
Describes an object capable of browsing a source code.

    interface SourceBrowser = {
      at: function(loc: ASTNodeLocation) -> string;
    }

**Member `at`** is a function:

1. `loc`: The `ASTNodeLocation` object.
5. `return`: Returns the piece of code requested. It it spans on more lines, those lines will be collapsed into a single line without adding anymore character.

## Types retrieval
Interfaces used to locate types in the AST and source. These objects will both use a `SourceBrowser` and an `ASTBrowser` to perform their tasks.

### Interface `TypeRetrieval`
Describes an object providing all necessary API for retrieving types in the source with help from AST as well.

    interface TypeRetrieval <: Initializable = {
      initialize: function(ast: SourceBrowser, src: ASTBrowser) -> void;
      retrieveTypes: function() -> [RegexMatches*];
    }

Where:

1. `initialize`: Initializes the module.
2. `retrieveTypes`: Retrieves all types and returns a collection of `RegexMatches`.

## Regex handling
Interfaces used mostly in `regex.js`.

### Interface `RegexMatches`
Describes an object providing all necessary API for describing the matches for a specific regex expression.

    interface RegexMatches = {
      matched: boolean;
      ALL: string;
      ...
    }

Where:

1. `matched`: A boolean indication whether the regex matched or not the expression provided as input.
2. `ALL`: The expression being matched. Regardless of the fact that the expression matched, this member will always contain the expression.
3. `...`: More members can be found depending on the specific `[RegexUnit]` being matched.

### Interface `RegexHandler`
Describes an object providing all necessary API for handling a specific regex.

    interface RegexHandler = function(matches: *string | null) -> RegexUnit | null

Where:

1. `matches`: The result of invoking `[object].exec([string])` using a regex and a string to match.
2. `return`: Returns an object indexing every useful capturing group; with the peculiarity that property `ALL` will always be available providing the whole match (`[object].exec([string])[0]`). Such object looks like: `{ ALL: '...', group1: '...', group2: '...', ... }`. Also be aware that `null` will be returned in case `matches` is `null` too.

### Interface `RegexUnit`
Describes an object providing all necessary API to give information for a specific regex and routines to handle that regex.

    interface RegexUnit = {
      regex: string;
      handler: RegexHandler;
    }

Where:

1. `regex`: Is the regex string (not the `RegExp` object).
2. 'handler': A `[RegexHandler]` for `regex`.

## TypeScript renderers
Interfaces capable of rendering syntactic constructs from ScriptSharp to TypeScript.

### Interface `TSRenderer`
Describes an object providing all necessary API for rendering a TypeScript syntax construct.

    interface TSRenderer <: Initializable = {
      initialize: function(rm: RegexMatches) -> void;
      render: function() -> string;
    }

Where:

1. `initialize`: Requires a `[RegexMatches]` object to start the description.
2. `render`: A function returning the TypeScript syntax for a particular syntax construct.
