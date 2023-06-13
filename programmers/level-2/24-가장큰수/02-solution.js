function solution(numbers) {
  const sortedNumbers = numbers
    .map((num) => num.toString())
    .sort((a, b) => (b + a).localeCompare(a + b));

  return sortedNumbers[0] === "0" ? "0" : sortedNumbers.join("");
}

console.log(solution([6, 10, 2])); // "6210"
console.log(solution([3, 30, 34, 5, 9])); // "9534330"

// Time Complexity: O(n log n)
// Space Complexity: O(n)
