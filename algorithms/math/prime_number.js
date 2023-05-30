/**
 * -------------------- Prime Number ------------------------
 * Problem: Give a natural number 'n', determine if the number is prime or not?
 * ----------------------------------------------------------
 * A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.
 * Example:
 *  isPrime(5) => true => because only have: (1 * 5) or (5 * 1)
 *  isPrime(4) => false => because has: (2 * 2)
 *  isPrime => 2, 3, 5, 7, 11
 */

function isPrime(n) {
  if (n < 2) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

console.log("insideee.dev - isPrime 1 :>", isPrime(1));
console.log("insideee.dev - isPrime 3 :>", isPrime(3));
console.log("insideee.dev - isPrime 4 :>", isPrime(4));
console.log("insideee.dev - isPrime 7 :>", isPrime(7));
console.log("insideee.dev - Big O => O(n)");

console.log("================== Optimize Primality Test ==================");
/**
 * ------------------ Optimize Primality Test -------------------------
 * Integers larger than square root do not need to checked because,
 * Whenever n = a * b, one of the two factors 'a' and 'b' is less than or equal to square root of 'n'
 * ----------------------------------------------------------------------
 * Example:
 * n = 24, a = 4, b = 6 => The square root of 24 = 4.89 => 4 < 4.89 => a is less than the square root of n => is not prime
 * n = 35, a = 5, b = 7 => The square root of 35 = 5.91 => 5 < 5.91 => a is less than the square root of n => is not prime
 */

function isPrimeOptimize(n) {
  if (n < 2) return false;

  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

// => Big O = O(sqrt(n))
