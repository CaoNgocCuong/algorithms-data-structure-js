/**
 * ----------------------- Binary Search -------------------------
 * Attention: Binary search only apply on an array sorted
 * ---------------------------------------------------------------
 * Problem: Give a sorted array of 'n' element and a target element 't', find the index of 't' in the array. Return -1 if the target element not found.
 * Example:
 * arr = [-5, 2, 4, 6, 10], target = 10 => index = 4
 * arr = [-5, 2, 4, 6, 10], target = 4 => index = 2
 * arr = [-5, 2, 4, 6, 10], target = 6 => index = 3
 * arr = [-5, 2, 4, 6, 10], target = 20 => index = -1
 */

function binarySearch(sortedArr, target) {
  let leftIndex = 0;
  let rightIndex = sortedArr.length - 1;

  while (leftIndex <= rightIndex) {
    const middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (sortedArr[middleIndex] === target) {
      return middleIndex;
    }

    if (target < sortedArr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }

  return -1;
}

console.log("--------------- Binary Search ---------------");
console.log(
  "insideee.dev - binarySearch t = 10 :>",
  binarySearch([-5, 2, 4, 6, 10], 10)
);
console.log(
  "insideee.dev - binarySearch t = 4 :>",
  binarySearch([-5, 2, 4, 6, 10], 4)
);
console.log(
  "insideee.dev - binarySearch t = 6 :>",
  binarySearch([-5, 2, 4, 6, 10], 6)
);
console.log(
  "insideee.dev - binarySearch t = 20 :>",
  binarySearch([-5, 2, 4, 6, 10], 20)
);
console.log("insideee.dev - Big O => O(log n) :>");

console.log("--------------- Binary Search with Recursive ---------------");
function binarySearchRecursive(sortedArray, target) {
  return search(sortedArray, target, 0, sortedArray.length - 1);
}

function search(sortedArr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) return -1;

  const middleIndex = Math.floor((leftIndex + rightIndex) / 2);

  if (sortedArr[middleIndex] === target) return middleIndex;

  if (target < sortedArr[middleIndex]) {
    return search(sortedArr, target, leftIndex, middleIndex - 1);
  } else {
    return search(sortedArr, target, middleIndex + 1, rightIndex);
  }
}

console.log(
  "insideee.dev - binarySearchRecursive t = 10 :>",
  binarySearchRecursive([-5, 2, 4, 6, 10], 10)
);
console.log(
  "insideee.dev - binarySearchRecursive t = 4 :>",
  binarySearchRecursive([-5, 2, 4, 6, 10], 4)
);
console.log(
  "insideee.dev - binarySearchRecursive t = 6 :>",
  binarySearchRecursive([-5, 2, 4, 6, 10], 6)
);
console.log(
  "insideee.dev - binarySearchRecursive t = 20 :>",
  binarySearchRecursive([-5, 2, 4, 6, 10], 20)
);
console.log("insideee.dev - Big O => O(log n) :>");
