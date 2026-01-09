/**
 * String utilities for Ari test harness
 *
 * Some functions are implemented, others are stubs for workers to complete.
 */

/**
 * Concatenate two strings
 * @param {string} a
 * @param {string} b
 * @returns {string}
 */
function concat(a, b) {
  return a + b;
}

/**
 * Reverse a string
 * TODO: Implement this function
 * @param {string} str
 * @returns {string}
 */
function reverse(str) {
  throw new Error('Not implemented: reverse');
}

/**
 * Capitalize the first letter of each word
 * TODO: Implement this function
 * @param {string} str
 * @returns {string}
 */
function capitalize(str) {
  throw new Error('Not implemented: capitalize');
}

/**
 * Check if a string is a palindrome
 * TODO: Implement this function
 * @param {string} str
 * @returns {boolean}
 */
function isPalindrome(str) {
  throw new Error('Not implemented: isPalindrome');
}

module.exports = {
  concat,
  reverse,
  capitalize,
  isPalindrome
};
