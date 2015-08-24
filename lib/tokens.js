/**
 * tokens.js
 * Andrea Tino - 2015
 */

/**
 * Tokens.
 * All tokens are saved as regular expressions.
 */
module.exports = function() {
  return {
    // Literals
    /**
     * White space. 
     */
    LITERAL_DOT: '\.',
    
    /**
     * Semicolon. 
     */
    LITERAL_SEMICOLON: '\;',
    
    // Inheritance and implementation
    /**
     * Class inheriting from class. 
     */
    INHERITANCE_CLASS_EXTENDS: 'extends',
    
    /**
     * Interface inheriting from interface. 
     */
    INHERITANCE_INTERFACE_EXTENDS: 'extends',
    
    /**
     * Class implementing interface. 
     */
    IMPLEMENTATION_CLASS_INTERFACE: 'implements',
    
    // Declarations
    /**
     * Class declaration. 
     */
    DECLARATION_CLASS: 'class',
    
    /**
     * Interface declaration. 
     */
    DECLARATION_INTERFACE: 'interface',
    
    /**
     * Variable declaration. 
     */
    DECLARATION_VAR: 'var',
    
    /**
     * Module declaration. 
     */
    DECLARATION_MODULE: 'module'
  };
};

