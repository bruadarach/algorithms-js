# Power of Two

## Problem

Gibe a positive integer 'n', determine if the number is a power of 2 or not.

An integer is a power of two if there exists an integer 'x' such that n == 2^x.

## Example

```js
isPowerOfTwo(1) = true(2^0)
isPowerOfTwo(2) = true(2^1)
isPowerOfTwo(3) = false
isPowerOfTwo(4) = true(2^2)
isPowerOfTwo(5) = false
```

## Psuedocode

- n = 8
- 8/2 = 4 (remainder 0)
- 4/2 = 2 (remainder 0)
- 2/2 = 1 (remainder 0)
- If remainder is not 0 in any step, 'n' is not a power of 2
- If remainder is 0 and 'n' comes down to 1 eventually, 'n' is a power of 2

## Big O

- Time Complexity: O(log n)

## Bitwise Power of Two (with Big O)

- Time Complexity: O(1)

```js
// numbers in binary
1; //=> 1
2; //=> 10
3; //=> 100
4; //=> 1000
```

If we try the bitwise AND operator on these numbers, we can see that we always end up with 0.

(Bitwise AND is one if both numbers are one, else it is zero)

```js
1; //=> 0001
0; //=> 0000
///////////
0; //=> 0000
```

```js
2; //=> 0010
1; //=> 0001
///////////
0; //=> 0000
```

```js
3; //=> 0100
2; //=> 0010
///////////
2; //=> 0000
```

```js
4; //=> 1000
3; //=> 0100
///////////
0; //=> 0000
```
