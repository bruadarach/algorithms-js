function solution(s) {
  const count = {};
  [...s.matchAll(/\d+/g)].map((v) => (count[v] = (count[v] || 0) + 1));
  return Object.entries(count)
    .sort((a, b) => b[1] - a[1])
    .map((v) => +v[0]);
}

console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}")); //	[2, 1, 3, 4]
console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}")); //	[2, 1, 3, 4]
console.log(solution("{{20,111},{111}}")); //	[111, 20]
console.log(solution("{{123}}")); //	[123]
console.log(solution("{{4,2,3},{3},{2,3,4,1},{2,3}}")); //	[3, 2, 4, 1]
