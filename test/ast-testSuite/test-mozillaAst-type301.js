/**
 * Test source file for types
 * Type: 301 - Array expression
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

// An array expression
print(JSON.stringify(Reflect.parse('[]')));
