# Describing interfaces in directory

## Interface `SourceBrowser`
Describes an object capable of browsing a source code.

    interface SourceBrowser = {
      // Extracts a piece of code.
      // rs: Row start.
      // re: Row end.
      // cs: Column start.
      // ce: Column end.
      at: function(rs, re, cs, ce) -> string;
    }

## Regex handling
Interfaces used mostly in `regex.js`.

### Interface `RegexHandler`
Describes an object providing all necessary API for handling a specific regex.

    interface RegexHandler = function(o) -> {}

### Interface `RegexUnit`
Describes an object providing all necessary API to give information for a specific regex and routines to handle that regex.

    interface RegexUnit = {
      regex: string;
      handler: RegexHandler;
    }
