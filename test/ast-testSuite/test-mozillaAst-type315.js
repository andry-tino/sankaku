/**
 * Test source file for types
 * Type: 315 - Member expression
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

// A member expression. If computed === true, the node corresponds to a 
// computed e1[e2] expression and property is an Expression. 
// If computed === false, the node corresponds to a static e1.x 
// expression and property is an Identifier
print(JSON.stringify(Reflect.parse('name.member')));
