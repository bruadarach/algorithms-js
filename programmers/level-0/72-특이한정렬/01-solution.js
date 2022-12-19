function solution(numlist, n) {
  // 숫자, 인덱스, 차이
  return numlist
    .sort((a, b) => {
      return Math.abs(n - b) === Math.abs(n - a)
        ? a - b
        : Math.abs(n - b) - Math.abs(n - a);
    })
    .reverse();
}

console.log(solution([1, 2, 3, 4, 5, 6], 4)); // [4, 5, 3, 6, 2, 1]
console.log(solution([10000, 20, 36, 47, 40, 6, 10, 7000], 30)); // [36, 40, 20, 47, 10, 6, 7000, 10000]
console.log(solution([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 11], 6)); // [6, 7, 5, 8, 4, 9, 3, 10, 2, 11, 1]
