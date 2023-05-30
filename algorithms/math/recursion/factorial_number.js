/**
 * ---------- Recursive factorial of number -----------------
 * Problem: Give an integer 'n', find the factorial of that integer.
 * The factorial of non-negative integer 'n', denoted n!, is the product of all positive integer less than or equal to 'n'
 * Factorial of zero is 1.
 * ----------------------------------------------------------
 * factorial(0) = 1
 * factorial(1) = 1 * 1
 * factorial(2) = 2 * 1
 * ...
 * factorial(4) = 4 * 3 * 2 * 1 = 24
 * factorial(5) = 5 * 4 * 3 * 2 * 1 = 120
 * => solution: n! = n * (n - 1)!
 */

function factorial(n) {
  if (n <= 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log("insideee.dev - factorial 0 :>", factorial(0));
console.log("insideee.dev - factorial 2 :>", factorial(2));
console.log("insideee.dev - factorial 4 :>", factorial(4));
console.log("insideee.dev - factorial 5 :>", factorial(5));
console.log("Big O => O(n)");
