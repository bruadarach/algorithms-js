function solution(array) {
  if (array.length === 1) return array[0];

  let count = {};
  array.forEach((v) => {
    count[v] === undefined ? (count[v] = 1) : count[v]++;
  });

  count = Object.entries(count).sort(([, a], [, b]) => b - a);

  return count.length === 1
    ? Number(count[0][0])
    : count[0][1] === count[1][1]
    ? -1
    : Number(count[0][0]);
}

console.log(solution([1, 2, 3, 3, 3, 4])); // 3
console.log(solution([1, 1, 2, 2])); // -1
console.log(solution([1])); // 1
console.log(solution([1, 1])); // 1
