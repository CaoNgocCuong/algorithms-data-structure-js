/**
 * --------------------- Linear search -------------------
 * Problem: Give an array of 'n' elements and a target element 't', find the index of 't' element in the array. Return -1 if the target element is not found.
 * ------------------------------------------------------
 * Example:
 * arr = [1, 3, 2, 5, 9], t = 5 => index = 3
 * arr = [1, 3, 2, 5, 9], t = 3 => index = 1
 * arr = [1, 3, 2, 5, 9], t = 9 => index = 4
 * arr = [1, 3, 2, 5, 9], t = 10 => index = -1
 */

/**
 * Linear search pseudocode
 * Start at the first element in the array and move towards the last.
 * At each element through, check if the element is equal to the target element.
 * If element found, return the index of the element.
 * If element not found, return -1.
 */

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

console.log(
  "insideee.dev - linearSearch 5 :>",
  linearSearch([1, 3, 2, 5, 9], 5)
);
console.log(
  "insideee.dev - linearSearch 3 :>",
  linearSearch([1, 3, 2, 5, 9], 3)
);
console.log(
  "insideee.dev - linearSearch 9 :>",
  linearSearch([1, 3, 2, 5, 9], 9)
);
console.log(
  "insideee.dev - linearSearch 10 :>",
  linearSearch([1, 3, 2, 5, 9], 10)
);
console.log("Big O -> O(n)");
