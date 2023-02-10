// slower than 01-solution.js

function solution(babbling) {
  return babbling
    .map((str) => (str.replace(/aya|ye|woo|ma/g, "").length === 0 ? 1 : 0))
    .reduce((a, b) => a + b, 0);
}

console.log(solution(["aya", "yee", "u", "maa", "wyeoo"])); // 1
console.log(solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"])); // 3
