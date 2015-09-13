/**
 * Test source file for types
 * Type: 500 - Case clause
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

// A case (if test is an Expression) or default (if test === null) 
// clause in the body of a switch statement
print(JSON.stringify(Reflect.parse('switch(0) { case 0: ; }')));
