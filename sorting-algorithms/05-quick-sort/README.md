## Quick Sort

Sorting through recursion where it keeps splitting up the data(array) until it hits arrays that are zero or one item.

## Quick Sort Idea

- Identify the pivot element in the array.
  - Pick first element as pivot
  - Pick last element as pivot (My Approach)
  - Pick a random element as pivot
  - Pick median as pivot
- Put everything that’s smaller than the pivot into a ‘left’ array and everything that’s greater than the pivot into a ‘right’ array.
- Repeat the process for the individual ‘left’ and ‘right’ arrays till you have an array of length 1 which is sorted by definition.
- Repeatedly concatenate the left array, pivot and right array till one sorted array remains.

## Big-O Analysis

- Time Complexity
  - Best case : `O(n log(n))`
  - Average case : `O(n log(n))`
  - Worst case : `O(n^2)`
- Space Complexity: `O(n)`
