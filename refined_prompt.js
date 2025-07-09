/**
 * Converts a string into camelCase.
 *
 * This function handles various formats, including spaces, underscores, and hyphens as separators.
 * It correctly processes acronyms, numbers, and mixed-case inputs.
 *
 * @param {string} str The input string to convert.
 * @returns {string} The camelCased string.
 * @throws {TypeError} If the input is not a string. Specific error messages are provided for null, undefined, number, array, object, and boolean input types.
 *
 * @example
 * // returns "helloWorld"
 * camelCase("hello world");
 *
 * @example
 * // returns "htmlParser"
 * camelCase("HTML parser");
 *
 * @example
 * // returns "item2Name"
 * camelCase("item_2_name");
 *
 * @example
 * // returns "xmlHttpRequest"
 * camelCase("XMLHttpRequest");
 *
 * @example
 * // returns "alreadyCamelCase"
 * camelCase("alreadyCamelCase");
 */

/**
 * Converts a string into dot.case format.
 *
 * This function handles various formats, including spaces, underscores, hyphens, and camelCase as separators.
 * It correctly processes acronyms, numbers, and mixed-case inputs, converting them to lowercase with dots.
 *
 * @param {string} str The input string to convert.
 * @returns {string} The dot.case formatted string.
 * @throws {TypeError} If the input is not a string. Specific error messages are provided for null, undefined, number, array, object, and boolean input types.
 *
 * @example
 * // returns "hello.world"
 * dotCase("hello world");
 *
 * @example
 * // returns "html.parser"
 * dotCase("HTML parser");
 *
 * @example
 * // returns "item.2.name"
 * dotCase("item_2_name");
 *
 * @example
 * // returns "xml.http.request"
 * dotCase("XMLHttpRequest");
 *
 * @example
 * // returns "already.dot.case"
 * dotCase("already.dot.case");
 */
