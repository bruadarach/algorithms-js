function towerOfHanoi(n, fromRod, toRod, usingRod) {
  // n means the number of disks
  if (n === 1) {
    console.log(`Move disk 1 from rod ${fromRod} to rod ${toRod}`);
    return;
  }

  towerOfHanoi(n - 1, fromRod, usingRod, toRod); // A, C, B
  console.log(`Move disk ${n} from rod ${fromRod} to rod ${toRod}`);
  towerOfHanoi(n - 1, usingRod, toRod, fromRod); // B, A, C
}

towerOfHanoi(3, "A", "C", "B");
// Move disk 1 from rod A to rod C
// Move disk 2 from rod A to rod B
// Move disk 1 from rod C to rod B
// Move disk 3 from rod A to rod C
// Move disk 1 from rod B to rod A
// Move disk 2 from rod B to rod C
// Move disk 1 from rod A to rod C

// time complexity : O(2^n)
