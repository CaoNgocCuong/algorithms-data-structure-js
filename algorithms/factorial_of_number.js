/**
 * ----- Factorial of a number ----------
 * Problem: Give a number 'n', find the factorial of that integer.
 * -----------------------------------------------------------
 * In mathematics, the factorial of a non-negative integer 'n', denoted n!, is the product of all
 * positive integer less than or equal to 'n'.
 *
 * Factorial of zero -> 1.
 *
 * factorial(1) = 1;
 * factorial(4) = 4 * 3 * 2 * 1 = 24
 * factorial(5) = 5 * 4 * 3 * 2 * 1 = 120
 */

function factorial(n) {
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result = result * i;
  }

  return result;
}

console.log("insideee.dev - factorial 0 :>", factorial(0));
console.log("insideee.dev - factorial 1 :>", factorial(1));
console.log("insideee.dev - factorial 2 :>", factorial(2));
console.log("insideee.dev - factorial 3 :>", factorial(3));
console.log("insideee.dev - factorial 4 :>", factorial(4));
console.log("insideee.dev - factorial 5 :>", factorial(5));
console.log("insideee.dev - Big O => O(n) ");
