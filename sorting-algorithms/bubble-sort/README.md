## Bubble Sort

- Bubble sort is a poor sorting algorithm in real world.
  - It is primarily used as a good introduction to sorting algorithms.

## Bubble Sort Idea

- Compare adjacent elements in the array and swap the position if they are not in the intended order.
- Repeat the instruction as you step through each element in the array.
- Once you step through the whole array with no swaps, the array is sorted.
- At the end, the highest number is said to have bubbled to the top.

## Big-O Analysis

- Time Complexity
  - Best case : O(n)
  - Worst case : `O(n^2)`
- Space Complexity: `O(1)`
  - The algorithm only requires auxiliary variables for flags, temporary variables and thus the space complexity is O(1).
