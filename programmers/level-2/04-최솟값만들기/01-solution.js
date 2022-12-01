function solution(A, B) {
  // 1. sorting
  // 2. multiply & accumulate

  A.sort((a, b) => b - a);
  B.sort((a, b) => a - b);

  let result = 0;
  A.forEach((num, i) => {
    result += num * B[i];
  });

  return result;
}

console.log(solution([1, 4, 2], [5, 4, 4])); // 29
console.log(solution([1, 2], [3, 4])); // 10
