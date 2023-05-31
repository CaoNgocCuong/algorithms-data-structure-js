/**
 * ---------------- Bubble sort ----------------------
 * Note: => Bubble sort is poor sorting algorithms => rarely used
 * ---------------------------------------------------
 * Problem: - Give an array of integers, sort the array
 * Example:
 * - Arr[-6, 20, 8, -2, 4] => Arr[-6, -2, 4, 8, 20]
 */

function bubbleSort(arr) {
  let isSwapped;

  do {
    isSwapped = false;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;

        isSwapped = true;
      }
    }
  } while (isSwapped);

  return arr;
}

console.log(
  "insideee.dev - bubbleSort [-6, 20, 8, -2, 4] :>",
  bubbleSort([-6, 20, 8, -2, 4])
);
console.log("insideee.dev - Big O => O(n^2) :>");
