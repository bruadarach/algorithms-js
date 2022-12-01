function solution(s) {
  temp = s;
  removedZeros = 0;
  loops = 0;

  while (s.length !== 1) {
    s = [...s].filter((ele, i) => ele === "1").length;
    removedZeros += temp.length - s;
    s = s.toString(2);
    temp = s;
    loops++;
  }
  return [loops, removedZeros];
}

console.log(solution("110010101001")); // [3,8]
console.log(solution("01110")); // [3,3]
console.log(solution("1111111")); // [4,1]
