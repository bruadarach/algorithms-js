function solution(s) {
  let result = [0, 0];

  while (s.length !== 1) {
    const oldLen = s.length;
    s = s.replace(/0/g, "");
    const newLen = s.length;
    s = newLen.toString(2);

    result[0]++;
    result[1] += oldLen - newLen;
  }
  return result;
}

console.log(solution("110010101001")); // [3,8]
console.log(solution("01110")); // [3,3]
console.log(solution("1111111")); // [4,1]
