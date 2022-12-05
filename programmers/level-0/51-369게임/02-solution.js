function solution(order) {
  return [...String(order).matchAll(/[3|6|9]/g)].length;
}

console.log(solution(3)); // 1
console.log(solution(29423)); // 2
