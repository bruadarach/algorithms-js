function solution(n) {
  //   return parseInt(parseInt(n, 10).toString(3).split("").reverse().join(""), 3);
  return parseInt([...parseInt(n, 10).toString(3)].reverse().join(""), 3);
}

console.log(solution(45)); // 7
console.log(solution(125)); // 229
