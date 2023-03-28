// the faster solution

function solution(s) {
  const set = new Set();
  const arr = s
    .slice(2, -2)
    .split("},{")
    .map((v) => v.split(",").map((v) => +v))
    .sort((a, b) => a.length - b.length);
  arr.forEach((v) => v.forEach((v) => set.add(v)));
  return [...set];
}

console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}")); //	[2, 1, 3, 4]
console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}")); //	[2, 1, 3, 4]
console.log(solution("{{20,111},{111}}")); //	[111, 20]
console.log(solution("{{123}}")); //	[123]
console.log(solution("{{4,2,3},{3},{2,3,4,1},{2,3}}")); //	[3, 2, 4, 1]
