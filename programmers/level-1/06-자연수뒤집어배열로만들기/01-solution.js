function solution(n) {
  return [...String(n)].reverse().map((ele) => Number(ele));
}

console.log(solution(12345)); // [5,4,3,2,1]
