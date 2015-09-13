/**
 * Test source file for types
 * Type: 108 - Switch statement
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

// A switch statement. The lexical flag is metadata indicating whether the switch 
// statement contains any unnested let declarations 
// (and therefore introduces a new lexical scope)
print(JSON.stringify(Reflect.parse('switch (k) {}')));
