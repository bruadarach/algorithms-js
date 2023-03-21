let array = [1, 30, 4, 21, 100000];
array.sort();
console.log(array); // [1, 100000, 21, 30, 4] // WRONG!

array.sort((a, b) => a - b);
console.log(array); // [ 1, 4, 21, 30, 100000 ]

array.sort((a, b) => b - a);
console.log(array); // [ 100000, 30, 21, 4, 1 ]
