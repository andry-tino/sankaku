/**
 * Test source file for types
 * Type: 303 - Property expression
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

// A literal property in an object expression can have either a string or 
// number as its value. Ordinary property initializers have a kind value "init"; 
// getters and setters have the kind values "get" and "set", respectively
print(JSON.stringify(Reflect.parse('object.property')));
