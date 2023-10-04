/**
 * Calculator module - See {@tutorial calculator-tutorial}
 * @module calculator
 */

/**
 * Adds two numbers
 * @param {number} n1 - First number
 * @param {number} n2 - Second number
 * @returns {number} - Sum of n1 + n2
 */
exports.add = (n1, n2) => n1 + n2;

/**
 * Multiplies two numbers
 * @param {number} n1 - First number
 * @param {number} n2 - Second number
 * @returns {number} - Multiplication of n1 * n2
 */
exports.multiply = (n1, n2) => n1 * n2;

/**
 * Subtracts two numbers
 * @param {number} n1 - First number
 * @param {number} n2 - Second number
 * @returns {number} - Subtraction of n1 - n2
 */
exports.subtract = (n1, n2) => n1 - n2;

/**
 * Divides two numbers
 * @param {number} n1 - First number
 * @param {number} n2 - Second number
 * @throws {Error} - Throws an error if n2 is zero
 * @returns {number} - Division of n1 / n2
 */
exports.divide = (n1, n2) => {
  if (n2 === 0) throw new Error('Cannot divide by zero.');
  return n1 / n2;
};
