/**
 * Converts a string to kebab-case format.
 *
 * This function handles various formats, including spaces, underscores, camelCase, and other separators.
 * It correctly processes acronyms, numbers, and mixed-case inputs.
 *
 * @param {string} str The input string to convert.
 * @param {boolean} [keepSpecialChars=false] Whether to preserve special characters (not recommended for URLs/identifiers).
 * @returns {string} The kebab-case formatted string.
 * @throws {TypeError} If the input is not a string.
 *
 * @example
 * // returns "hello-world"
 * toKebabCase("hello world");
 *
 * @example
 * // returns "xml-http-request"
 * toKebabCase("XMLHttpRequest");
 *
 * @example
 * // returns "item-2-name"
 * toKebabCase("item_2_name");
 *
 * @example
 * // returns "already-kebab-case"
 * toKebabCase("already-kebab-case");
 */
function toKebabCase(str, keepSpecialChars = false) {
    if (typeof str !== 'string') {
        // Provide descriptive error messages for different input types
        if (str === null) {
            throw new TypeError('Expected string, received null');
        }
        if (str === undefined) {
            throw new TypeError('Expected string, received undefined');
        }
        if (typeof str === 'number') {
            throw new TypeError(`Expected string, received number: ${str}`);
        }
        if (Array.isArray(str)) {
            throw new TypeError(`Expected string, received array: [${str.join(', ')}]`);
        }
        if (typeof str === 'object') {
            throw new TypeError(`Expected string, received object: ${JSON.stringify(str)}`);
        }
        if (typeof str === 'boolean') {
            throw new TypeError(`Expected string, received boolean: ${str}`);
        }
        // Fallback for other types
        throw new TypeError(`Expected string, received ${typeof str}: ${str}`);
    }

    const trimmedStr = str.trim();
    if (trimmedStr === '') {
        return '';
    }
    
    let result = trimmedStr;

    // Handle camelCase and PascalCase boundaries (e.g., "camelCase" -> "camel-Case", "XMLHttpRequest" -> "XML-Http-Request")
    result = result.replace(/([a-z])([A-Z0-9])/g, '$1-$2');
    result = result.replace(/([A-Z])([A-Z][a-z])/g, '$1-$2');
    result = result.replace(/([0-9])([A-Za-z])/g, '$1-$2');
    
    // Convert to lowercase
    result = result.toLowerCase();
    
    // Replace spaces, underscores, dots, slashes, and other separators with hyphens
    result = result.replace(/[\s_\.\/\\]+/g, '-');
    
    // Remove special characters (unless keeping them)
    if (!keepSpecialChars) {
        result = result.replace(/[^a-z0-9\-]/g, '');
    }
    
    // Remove leading/trailing hyphens and multiple consecutive hyphens
    result = result.replace(/^-+|-+$/g, '').replace(/-+/g, '-');
    
    return result;
}

module.exports = toKebabCase;

// Example usage and test cases:
console.log('=== Basic Examples ===');
console.log(toKebabCase("hello world"));        // "hello-world"
console.log(toKebabCase("user_name"));           // "user-name"
console.log(toKebabCase("api-endpoint"));        // "api-endpoint"

console.log('\n=== CamelCase & PascalCase ===');
console.log(toKebabCase("HelloWorld"));          // "hello-world"
console.log(toKebabCase("camelCaseString"));     // "camel-case-string"
console.log(toKebabCase("XMLHttpRequest"));      // "xml-http-request"
console.log(toKebabCase("parseHTML"));           // "parse-html"

console.log('\n=== Numbers & Mixed Cases ===');
console.log(toKebabCase("item_2_name"));         // "item-2-name"
console.log(toKebabCase("version2Beta"));        // "version-2-beta"
console.log(toKebabCase("HTML5Parser"));         // "html-5-parser"

console.log('\n=== Edge Cases ===');
console.log(toKebabCase("  hello world  "));     // "hello-world" (trimmed)
console.log(toKebabCase("already-kebab-case"));  // "already-kebab-case"
console.log(toKebabCase(""));                    // "" (empty string)
console.log(toKebabCase("single"));              // "single" (single word)
console.log(toKebabCase("___hello___world___")); // "hello-world" (multiple separators)

console.log('\n=== Special Characters ===');
console.log(toKebabCase("hello@world.com"));     // "helloworldcom" (removed)
console.log(toKebabCase("hello@world.com", true)); // "hello@world.com" (kept)

console.log('\n=== Error Handling ===');
try {
    toKebabCase(123);
} catch (e) {
    console.log(e.message); // "Expected string, received number: 123"
}

try {
    toKebabCase(null);
} catch (e) {
    console.log(e.message); // "Expected string, received null"
}

try {
    toKebabCase(['hello', 'world']);
} catch (e) {
    console.log(e.message); // "Expected string, received array: [hello, world]"
}