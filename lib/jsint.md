# Describing interfaces in directory

## Interface `SourceBrowser`
Describes an object capable of browsing a source code.

    interface SourceBrowser = {
      at: function(rs, re, cs, ce) -> string;
    }

Where:

1. `rs`: Row start.
2. `re`: Row end.
3. `cs`: Column start.
4. `ce`: Column end.

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
