/**
 * --------------------------- Insertion sort ---------------------------
 * Problem: - Give an array of integers, sort the array
 * Example:
 * - Arr[-6, 20, 8, -2, 4] => Arr[-6, -2, 4, 8, 20]
 */

const arr = [-6, 20, 8, -2, 4];

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const numberToInsert = arr[i];
    let numberSortedIndex = i - 1;

    while (numberSortedIndex >= 0 && arr[numberSortedIndex] > numberToInsert) {
      arr[numberSortedIndex + 1] = arr[numberSortedIndex];

      numberSortedIndex -= 1;
    }

    arr[numberSortedIndex + 1] = numberToInsert;
  }

  return arr;
}

console.log(`insideee.dev - insertionSort [${arr}] :>`, insertionSort(arr));
console.log("insideee.dev - Big O => O(n ^ 2) :>");
