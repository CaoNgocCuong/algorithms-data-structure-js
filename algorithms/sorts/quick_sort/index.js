/**
 * --------------------------- Quick sort (usually use) ---------------------------
 * Problem: - Give an array of integers, sort the array
 * Example:
 * - Arr[-6, 20, 8, -2, 4] => Arr[-6, -2, 4, 8, 20]
 */

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [-6, 20, 8, -2, 4];
console.log(`insideee.dev - quickSort [${arr}] :>`, quickSort(arr));
console.log(
  "insideee.dev - a worst case O(n ^ 2) :::::::::::> in case arr is sorted because [1, 2, 3, 4, 5, 6, 7] => pivot = 7, left = [], right = [1, 2, 3, 4, 5, 6], ..."
);
console.log(
  "insideee.dev - average case O(n log n) ::::::::> 1 for loop = O(n), 1/2 loop = log (n) => O(n) + O(log n) = O(n log n)"
);

// ----------------------- Quick sort with in place ----------------------
function quickSortInPlace(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivot = partition(arr, left, right);
    quickSortInPlace(arr, left, pivot - 1);
    quickSortInPlace(arr, pivot + 1, right);
  }
  return arr;
}

function partition(arr, left, right) {
  const pivot = arr[right];
  let i = left;
  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      swap(arr, i, j);
      i++;
    }
  }
  swap(arr, i, right);
  return i;
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

quickSortInPlace(arr);
console.log(arr); // [-6, -2, 4, 8, 20]
