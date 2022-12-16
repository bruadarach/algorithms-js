function solution(s) {
  return [...s].map((v, idx) => {
    return s.slice(0, idx).indexOf(v) === -1
      ? -1
      : s.slice(0, idx).length - s.slice(0, idx).lastIndexOf(v);
  });
}

console.log(solution("banana")); // [-1, -1, -1, 2, 2, 2]
console.log(solution("foobar")); // [-1, -1, 1, -1, -1, -1]
