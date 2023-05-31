/**
 * ---------------------- Climbing Staircase --------------------
 * Problem: Give a staircase with 'n' steps, count the number of distinct ways to climb to the top. You can either climb 1 step or 2 steps at a time.
 * Example:
 * n = 1 => climbingStaircase(1) => 1 |> (1)
 * n = 2 => climbingStaircase(2) => 2 |> (1, 1), (2)
 * n = 3 => climbingStaircase(3) => 3 |> (1, 1, 1), (1, 2), (2, 1)
 * n = 4 => climbingStaircase(4) => 5 |> (1, 1, 1, 1), (1, 2, 1), (1, 1, 2), (2, 1, 1), (2, 2)
 */

/***
 * At any give time, you can climb either 1 step or 2 steps
 * If you have to climb to 'n' steps, we can only climb from step 'n - 1' or 'n - 2'
 * Calculate the ways we can climb to 'n - 1' and 'n - 2' steps and add the two
 *
 * => climbingStaircase(n) = climbingStaircase(n - 1) + climbingStaircase(n - 2);
 */

function climbingStaircase(n) {
  if (n <= 2) return n;

  return climbingStaircase(n - 1) + climbingStaircase(n - 2);
}

const n = 10;
console.log(
  `insideee.dev - climbingStaircase n = ${n} :>`,
  climbingStaircase(n)
);

// ------------------- climbing staircase without recursive --------------
function climbingStaircaseNonRecursive(n) {
  const numberOfWays = [1, 2];

  for (let i = 2; i < n; i++) {
    numberOfWays[i] = numberOfWays[i - 1] + numberOfWays[i - 2];
  }

  return numberOfWays[n - 1];
}
console.log(
  `insideee.dev - climbingStaircaseNonRecursive n = ${n} :>`,
  climbingStaircaseNonRecursive(n)
);
