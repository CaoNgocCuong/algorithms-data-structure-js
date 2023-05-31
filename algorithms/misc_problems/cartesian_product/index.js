/**
 * -------------------------------- Cartesian product ----------------
 * Problem: Give two finite non-empty sets, find their Cartesian Product
 * In mathematics, specifically set theory, the Cartesian product of two sets A and B, denoted AxB, is the set of all ordered pairs (a, b) where a is in A and b is in B.
 * Example:
 * const A = [1, 2]
 * const B = [3, 4]
 * => AxB = [[1, 3], [1, 4], [2, 3], [2, 4]];
 *
 * const C = [1, 2]
 * const D = [3, 4, 5]
 * => CxD = [[1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5]]
 */

/**
 * Idea: Traverse each array and pair each element in the first array with each element in the second array
 */

function cartesianProduct(firstArr, secondArr) {
  const result = [];

  for (let i = 0; i < firstArr.length; i++) {
    for (let j = 0; j < secondArr.length; j++) {
      const temp = [firstArr[i], secondArr[j]];
      result.push(temp);
    }
  }

  return result;
}

const firstArr = [1, 2, 0];
const secondArr = [3, 4, 5, 6];
console.log(
  `insideee.dev - cartesian product [${firstArr}] - [${secondArr}] :>`,
  cartesianProduct(firstArr, secondArr)
);
console.log("insideee.dev - Big O => O(n.m) :>");
