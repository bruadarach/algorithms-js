// faster than 01-solution.js

function solution(s) {
  const hash = {};

  return [...s].map((v, idx) => {
    let result = hash[v] !== undefined ? idx - hash[v] : -1;
    hash[v] = idx;
    return result;
  });
}

console.log(solution("banana")); // [-1, -1, -1, 2, 2, 2]
console.log(solution("foobar")); // [-1, -1, 1, -1, -1, -1]
