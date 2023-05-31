/**
 * ------------------------- Tower of Ha Noi ----------------------
 * Problem: The objective of the puzzle is to move the entire stack to the last rod, obeying the following rules:
 * 1. Only one disk may be moved at the time.
 * 2. Each move consists of talking the upper disk from one of the stacks and placing it on top of another stack or on an non empty rod. And lastly.
 * 3. No disk may be placed on top of a disk that is smaller.
 */

function towerOfHaNoi(n, fromRod, toRod, usingRod) {
  if (n === 1) {
    console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
    return;
  }

  towerOfHaNoi(n - 1, fromRod, usingRod, toRod);
  console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
  towerOfHaNoi(n - 1, usingRod, toRod, fromRod);
}

const n = 4;
console.log(`Starting with n = ${n} disks, ...`);
towerOfHaNoi(n, "Column A", "Column C", "Column B");
