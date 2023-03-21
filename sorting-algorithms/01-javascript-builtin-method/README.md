## `Array.prototype.sort()`

- The sort() method sorts the elements of an array `in place`
- It returns the reference to the same array, now sorted.
- The default sort order is ascending, <u>built upon converting the elements into `strings`, then comparing their sequences of UTF-16 code units values.</u>
- The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.

## How to sort

- The built-in `sort()` method accepts an optional `compareFunction` parameter.
- You can use comparator functions to tell JavaScript how you want to sort an array.
- The compareFunction takes two arguments `a` and `b`, and determines an ordering based on the return value.
  - If it returns a negative number, `a` should come before `b`.
  - If it returns a positive number, `a` should come after `b`.
  - If it returns 0, `a` and `b` are the same as far as the sort is concerned.

## `sort()` returns the reference to the same array

The sort() method returns a reference to the original array, so mutating the returned array will mutate the original array as well.

```js
const numbers = [3, 1, 4, 1, 5];
const sorted = numbers.sort((a, b) => a - b);
// numbers and sorted are both [1, 1, 3, 4, 5]
sorted[0] = 10;
console.log(numbers[0]); // 10
```

In case you want `sort()` to not mutate the original array, but return a shallow-copied array like other array methods (e.g. map()) do, you can do a `shallow copy` before calling sort(), using the `spread syntax` or `Array.from()`.

```js
const numbers = [3, 1, 4, 1, 5];
// [...numbers] creates a shallow copy, so sort() does not mutate the original
const sorted = [...numbers].sort((a, b) => a - b);
sorted[0] = 10;
console.log(numbers[0]); // 3
```

## Sort stability

Since version 10 (or ECMAScript 2019), the specification dictates that Array.prototype.sort is stable.

For example, say you had a list of students alongside their grades. Note that the list of students is already pre-sorted by name in alphabetical order:

```js
const students = [
  { name: "Alex", grade: 15 },
  { name: "Devlin", grade: 15 },
  { name: "Eagle", grade: 13 },
  { name: "Sam", grade: 14 },
];

students.sort((firstItem, secondItem) => firstItem.grade - secondItem.grade);
```

It's important to note that students that have the same grade (for example, Alex and Devlin), will remain in the same order as before calling the sort. This is what a stable sorting algorithm guarantees.

```js
[
  { name: "Eagle", grade: 13 },
  { name: "Sam", grade: 14 },
  { name: "Alex", grade: 15 }, // original maintained for similar grade (stable sorting)
  { name: "Devlin", grade: 15 }, // original maintained for similar grade (stable sorting)
];
```

Before version 10 (or ECMAScript 2019), sort stability was not guaranteed, meaning that you could end up with the following:

```js
[
  { name: "Eagle", grade: 13 },
  { name: "Sam", grade: 14 },
  { name: "Devlin", grade: 15 }, // original order not maintained
  { name: "Alex", grade: 15 }, // original order not maintained
];
```

## Resource

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
