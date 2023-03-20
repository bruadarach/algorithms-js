## Selection Sort

Similar to the bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position.

1. go through and select the smallest element
2. swap and put it at the beginning

## Selection Sort Pseudocode

1. Store the first element as the smallest value you’ve seen so far.
2. Compare this item to the next item in the array until you find a smaller number.
3. If a smaller number is found, designate the smaller number to be the new “minimum” and continue until the end of the array.
4. If the “minimum” is not the value (index) you initially began with, swap the two values.
5. Repeat this with the next element until the array is sorted.

## Big-O Analysis

- Time Complexity
  - Best case : `O(n^2)`
  - Worst case : `O(n^2)`
- Space Complexity: `O(1)`
