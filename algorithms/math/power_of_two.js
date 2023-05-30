/**
 * --------------------------- Power of Two ---------------------
 * Problem: Give a positive integer 'n', determine if the number is a power of two or not?
 * --------------------------------------------------------------
 * An integer is a power of two if there exists an integer 'x' such that 'n' === 2^x
 *
 * Example:
 *  isPowerOfTwo(1) => true => 2^0 = 1
 *  isPowerOfTwo(3) => false
 *  isPowerOfTwo(4) => true => 2^2 = 4
 *  isPowerOfTwo(5) => false
 *  isPowerOfTwo(8) => true => 2^3 = 8
 *
 * Solution:
 * n = 8
 * -> 8 / 2 = 4 (remainder 0)
 * -> 4 / 2 = 2 (remainder 0)
 * -> 2 / 2 = 1 (remainder 0)
 * => If remainder is not equal 0 in any step, 'n' is not power of two.
 * => If remainder is equal 0 and 'n' comes down to 1 eventually, 'n' is a power of two.
 */

function isPowerOfTwo(n) {
  if (n < 1) return false;

  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }

    n = n / 2;
  }

  return true;
}

console.log("insideee.dev - is power of two 1 :>", isPowerOfTwo(1));
console.log("insideee.dev - is power of two 2 :>", isPowerOfTwo(2));
console.log("insideee.dev - is power of two 3 :>", isPowerOfTwo(3));
console.log("insideee.dev - is power of two 4 :>", isPowerOfTwo(4));
console.log("insideee.dev - is power of two 5 :>", isPowerOfTwo(5));
console.log("insideee.dev - is power of two 8 :>", isPowerOfTwo(8));
console.log("Big O => O(log n)");
