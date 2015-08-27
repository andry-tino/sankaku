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
      at: function(rs: number, re: number, cs: number, ce: number) -> string;
    }

**Member `at`** is a function:

1. `rs`: Row start.
2. `re`: Row end.
3. `cs`: Column start.
4. `ce`: Column end.
5. `return`: Returns the piece of code requested. It it spans on more lines, those lines will be collapsed into a single line without adding anymore character.

## Regex handling
Interfaces used mostly in `regex.js`.

### Interface `RegexHandler`
Describes an object providing all necessary API for handling a specific regex.

    interface RegexHandler = function(matches: *string | null) -> object | null

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
