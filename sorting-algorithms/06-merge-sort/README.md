## Quick Sort

Sorting through recursion where it keeps splitting up the data(array) until it hits arrays that are zero or one item.

## Merge Sort Idea

- Divide the array into subarrays, each containing only one element.
  - An array with one element is considered sorted.
- Repeatedly merge the sub arrays to produce new sorted sub arrays, until there is only one sub array remaining. That will be the sorted array.

## Big-O Analysis

Time Complexity

- Best case : `O(n log n)`
- Worst case : `O(n^2)`
  Space Complexity: `O(n)`
