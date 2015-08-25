# Describing interfaces in directory

## Interface `SourceBrowser`
Describes an object capable of browsing a source code.

    interface SourceBrowser {
      // Extracts a piece of code.
      // rs: Row start.
      // re: Row end.
      // cs: Column start.
      // ce: Column end.
      at: function(rs, re, cs, ce) -> string;
    }

