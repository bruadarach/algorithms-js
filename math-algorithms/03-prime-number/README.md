# Prime Number

## Problem

Given a natural number 'n', determine if the number is prime or not.

A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.

## Example

- isPrime(5) = true (`1*5` or `5*1`)
- isPrime(4) = false (`1*4` or `2*2` or `4*1`)

## Big O

- Time Complexity: O(n)

## Optimized Primality Test

Integer larger tha n the square root do not need to be checked because, whenever `n=a*b`, one of the two factors 'a' and 'b' is less than or equal to the square root of 'n'.

```js
n = 24, a = 4, b = 6
The square root of 24 is 4.89.
4 is less than 4.89
a is less than the square root of n
```

```js
n = 35, a = 5, b = 7
The square root of 35 is 5.91.
5 is less than 5.91
a is less than the square root of n
```

## Big O (Optimized)

- Time Complexity: O(sqrt(n))
