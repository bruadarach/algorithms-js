function solution(n) {
  return Array.from({ length: n }, (ele, idx) => idx + 1).filter(
    (ele) => ele % 2 !== 0
  );
}

console.log(solution(10)); // [1, 3, 5, 7, 9]
console.log(solution(15)); // [1, 3, 5, 7, 9, 11, 13, 15]
