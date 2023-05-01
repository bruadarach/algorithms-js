# Recursive Factorial of a Number

## Problem

Given a integer 'n', find the factorial of that integer

The factorial of a non-negative integer 'n' is the product of all positive integers less than or equal to 'n'.

## Example

- factorial(0) = 1
- factorial(1) = 1
- factorial(2) = 2 \* 1 = 2
- factorial(3) = 3 _ 2 _ 1 = 6
- factorial(4) = 4 _ 3 _ 2 \* 1 = 24
- factorial(5) = 5 _ 4 _ 3 _ 2 _ 1 = 120

## Tips for recursive solutions

- Figure out how to break down the problem into smaller versions of the same problem
- Figure out the base case(s) for recursion
- Factorial of a non-negative integer 'n' is the product of all positive integers less than or equal to 'n'
  - 5! = 5 \* 4 \* 3 \* 2 \* 1 // 5\*4! = 120
  - 4! = 4 \* 3 \* 2 \* 1 // 4\*3! = 24
  - 3! = 3 \* 2 \* 1 // 3\*2! = 6
  - 2! = 2 \* 1 // 2\*1! = 2
  - 1! = 1 // 1\*0! = 1
  - 0! = 1

=> n! = n \* (n-1)!
