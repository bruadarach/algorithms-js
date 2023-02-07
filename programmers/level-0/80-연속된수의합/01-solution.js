function solution(num, total) {
  //   const middle = total / num;
  //   return Array.from({ length: num }, (_, i) => i + middle - (num - 1) / 2);

  return Array.from({ length: num }, (_, i) => i + total / num - (num - 1) / 2);
}

console.log(solution(3, 12)); // [3, 4, 5]
console.log(solution(5, 15)); // [1, 2, 3, 4, 5]
console.log(solution(4, 14)); // [2, 3, 4, 5]
console.log(solution(5, 5)); // [-1, 0, 1, 2, 3]
