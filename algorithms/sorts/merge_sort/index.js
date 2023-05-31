/**
 * --------------------------- Merge sort ---------------------------
 * Problem: - Give an array of integers, sort the array
 * Example:
 * - Arr[-6, 20, 8, -2, 4] => Arr[-6, -2, 4, 8, 20]
 */

function mergeSort(arr = []) {
  if (arr.length < 2) {
    return arr;
  }

  const middleIndex = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, middleIndex);
  const rightArr = arr.slice(middleIndex);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr = [], rightArr = []) {
  const sortedArr = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }

  return [...sortedArr, ...leftArr, ...rightArr];
}

const arr = [-6, 20, 8, -2, 4];
console.log(`insideee.dev - merge sort [${arr}] :>`, mergeSort(arr));
console.log("insideee.dev - Big O => O(n log n) :>");
