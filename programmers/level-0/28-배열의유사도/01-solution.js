function solution(s1, s2) {
  return s1.filter((ele, idx) => s2.includes(ele)).length;
}

console.log(solution(["a", "b", "c"], ["com", "b", "d", "p", "c"])); // 2
console.log(solution(["n", "omg"], ["m", "dot"])); // 0
