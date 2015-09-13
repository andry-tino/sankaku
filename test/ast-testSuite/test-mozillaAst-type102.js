/**
 * Test source file for types
 * Type: 102 - Expression statement
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

// An expression statement, i.e., a statement consisting of a single expression
print(JSON.stringify(Reflect.parse('1 + 2')));
