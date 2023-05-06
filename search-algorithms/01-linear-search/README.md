# Linear Search

## Problem

Given an array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found.

## Examples

- arr = [-5, 2, 10, 4, 6], t=10 -> should return 2
- arr = [-5, 2, 10, 4, 6], t=6 -> should return 4
- arr = [-5, 2, 10, 4, 6], t=20 -> should return -1

## Linear Search Pseudocode

- Start at the first element in the array and move towards the last.
- At each element though, check if the element is equal to the target element.
- If element found, return the index of the element.
- If element not found, return -1.

## Big O

- Time Complexity: O(n)
