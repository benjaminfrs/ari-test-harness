/**
 * Math utilities for Ari test harness
 *
 * Some functions are implemented, others are stubs for workers to complete.
 */

/**
 * Add two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtract b from a
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiply two numbers
 * TODO: Implement this function
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function multiply(a, b) {
  throw new Error('Not implemented: multiply');
}

/**
 * Divide a by b with optional precision
 * TODO: Implement this function
 * @param {number} a - dividend
 * @param {number} b - divisor
 * @param {number} precision - decimal places (default: 2)
 * @returns {number}
 */
function divide(a, b, precision = 2) {
  throw new Error('Not implemented: divide');
}

/**
 * Calculate the square of a number
 * TODO: Implement this function
 * @param {number} n
 * @returns {number}
 */
function square(n) {
  throw new Error('Not implemented: square');
}

/**
 * Calculate the cube of a number
 * TODO: Implement this function
 * @param {number} n
 * @returns {number}
 */
function cube(n) {
  throw new Error('Not implemented: cube');
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  square,
  cube
};
