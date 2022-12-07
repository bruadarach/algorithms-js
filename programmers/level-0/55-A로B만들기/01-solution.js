function solution(before, after) {
  return [...before].sort().join("") === [...after].sort().join("") ? 1 : 0;
}

console.log(solution("olleh", "hello")); // 1
console.log(solution("allpe", "apple")); // 0
