/**
 * Adds two numbers and returns the result.
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
function sum(a, b) {
  return a + b;
}

/**
 * Subtracts the second number from the first and returns the result.
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Result of a minus b
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiplies two numbers and returns the result.
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Product of a and b
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Divides the first number by the second and returns the result.
 * Throws an error if division by zero is attempted.
 * @param {number} a - Numerator
 * @param {number} b - Denominator
 * @returns {number} Result of a divided by b
 * @throws {Error} If b is zero
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}