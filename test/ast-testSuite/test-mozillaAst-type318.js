/**
 * Test source file for types
 * Type: 318 - Generator expression
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

// A generator expression. As with array comprehensions, the blocks array 
// corresponds to the sequence of for and for each blocks, and 
// ithe optional filter expression corresponds to the final if clause, if present
print(JSON.stringify(Reflect.parse('function* f() {}')));
