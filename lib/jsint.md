# Describing interfaces in directory

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
2. `return`: Returns an object indexing every useful capturing group like: `{ group1: '...', group2: '...', ... }`. `null` will be returned in case `matches` is `null` too.

### Interface `RegexUnit`
Describes an object providing all necessary API to give information for a specific regex and routines to handle that regex.

    interface RegexUnit = {
      regex: string;
      handler: RegexHandler;
    }

Where:

1. `regex`: Is the regex string (not the `RegExp` object).
2. 'handler': A `[RegexHandler]` for `regex`.
