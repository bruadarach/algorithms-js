function solution(numbers) {
  numbers.sort((a, b) => {
    const ab = a.toString() + b.toString();
    const ba = b.toString() + a.toString();
    console.log(ab, ba); // 106, 610 // 210, 102
    return ba - ab;
  });
  // console.log(numbers);
  // [ 6, 2, 10 ]
  // [ 9, 5, 34, 3, 30 ]

  return numbers[0] === 0 ? "0" : numbers.join("");
}

console.log(solution([6, 10, 2])); // "6210"
console.log(solution([3, 30, 34, 5, 9])); // "9534330"

// Time Complexity: O(n log n)
// Space Complexity: O(n)
