/**
 * Test source file for types
 * Type: 319 - Graph expression
 *
 * Important!
 * Execute this file by calling the SpiderMonkey compiler process:
 * 
 *     SpiderMonkeyProcess --file=<path-to-this-file>
 * 
 * Print returned value of that function and copy/paste it in
 * file corresponding `-ast.json` file.
 * 
 * Remember:
 * Tests will not use this file, but its corresponding `-ast.json` file!
 * So always be sure these two files are in sync.
 */

// A graph expression, aka "sharp literal," such as #1={ self: #1# }
print(JSON.stringify(Reflect.parse('')));
