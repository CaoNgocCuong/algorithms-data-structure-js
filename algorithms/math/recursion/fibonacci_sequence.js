/**
 * -------------------------- Recursion Fibonacci Sequence ---------------------
 * Problem: Give a number 'n', find the n^th element of the Fibonacci sequence.
 * - In the mathematics, the Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones.
 * - The first two numbers in the sequence are 0 and 1. => (0, 1, 1, 2, 3, 5, 8, 13, ...)
 * recursionFibonacci(0) => 0
 * recursionFibonacci(1) => 1
 * recursionFibonacci(4) => 3
 * recursionFibonacci(6) => 8
 * recursionFibonacci(8) => 21
 */

/**
 * ============= Solution
 * I have: f1 = 1, f0 = 0 and f(n) = f(n - 1) + f(n - 2) => with (f(n) represent is a function f with number 'n')
 * Example: find f5?
 * f5 = f4 + f3 = (f3 + f2) + (f2 + f1)
 *              = ((f2 + f1) + (f1 + f0)) + (f1 + f0 + 1)
 *              = ((f1 + f0 + 1) + (1 + 0)) + (1 + 0 + 1)
 *              = ((1 + 0 + 1) + 1) + 2
 *              = (2 + 1) + 2 = 5
 */

function recursionFibonacci(n) {
  if (n < 2) {
    return n;
  }

  return recursionFibonacci(n - 1) + recursionFibonacci(n - 2);
}

console.log("insideee.dev - recursionFibonacci 0 :>", recursionFibonacci(0));
console.log("insideee.dev - recursionFibonacci 1 :>", recursionFibonacci(1));
console.log("insideee.dev - recursionFibonacci 3 :>", recursionFibonacci(3));
console.log("insideee.dev - recursionFibonacci 5 :>", recursionFibonacci(5));
console.log("insideee.dev - recursionFibonacci 6 :>", recursionFibonacci(6));
console.log("Big O => O(2^n)");
