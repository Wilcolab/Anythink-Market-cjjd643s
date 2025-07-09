/**
 * Converts a given string to camelCase.
 * 
 * Examples:
 *   toCamelCase("first name")     // "firstName"
 *   toCamelCase("user_id")        // "userId"
 *   toCamelCase("SCREEN_NAME")    // "screenName"
 *   toCamelCase("mobile-number")  // "mobileNumber"
 *
 * @param {string} str
 * @returns {string}
 */
function toCamelCase(str) {
    return str
        .trim()
        // split on any sequence of non-alphanumeric characters
        .split(/[^a-zA-Z0-9]+/)
        .map((word, idx) => {
            const lower = word.toLowerCase();
            if (idx === 0) {
                // first word is all lowercased
                return lower;
            }
            // capitalize first letter of subsequent words
            return lower.charAt(0).toUpperCase() + lower.slice(1);
        })
        .join('');
}

// Example usage:
// console.log(toCamelCase("first name"));    // "firstName"
// console.log(toCamelCase("user_id"));       // "userId"
// console.log(toCamelCase("SCREEN_NAME"));   // "screenName"
// console.log(toCamelCase("mobile-number")); // "mobileNumber"

module.exports = { toCamelCase };