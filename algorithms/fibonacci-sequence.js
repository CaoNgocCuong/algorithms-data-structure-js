/**
 * Problem: Give a number 'n' -> find the first 'n' element of the Fibonacci sequence.
 * ----------------------------------------------------------------
 * In mathematics, the Fibonacci sequence is a sequence in which each number is the sum of the
 * two  preceding ones.
 * The first two numbers in the sequence are 0 and 1.
 * Example:
 *  - fibonacci(2) = [0, 1]
 *  - fibonacci(3) = [0, 1, 1]
 *  - fibonacci(7) = [0, 1, 1, 2, 3, 5, 8]
 */

function fibonacci(n) {
  const arrFibonacci = [0, 1];

  for (let i = 2; i < n; i++) {
    arrFibonacci[i] = arrFibonacci[i - 1] + arrFibonacci[i - 2];
  }

  return arrFibonacci;
}

console.log("insideee.dev - fibonacci 2 :>", fibonacci(2));
console.log("insideee.dev - fibonacci 3 :>", fibonacci(3));
console.log("insideee.dev - fibonacci 5 :>", fibonacci(5));
console.log("insideee.dev - fibonacci 7 :>", fibonacci(7));
console.log("insideee.dev - Big O => O(n)");
