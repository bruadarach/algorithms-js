// keep in mind about the main logic: 숫자면 숫자를 추가하고, 문자면 " "로 추가하기
// best solution => 03-solution.js
// 숫자 문자열 -> 숫자  => +"문자열"
function solution(my_string) {
  let result = "";
  for (let i = 0; i < my_string.length; i++) {
    Number.isInteger(+my_string[i])
      ? (result += my_string[i])
      : (result += " ");
  }
  return result.split(" ").reduce((acc, cur) => acc + Number(cur), 0);
}

console.log(solution("aAb1B2cC34oOp")); // 37
console.log(solution("1a2b3c4d123Z")); // 133
console.log(solution("zzz111")); // 111
console.log(solution("zzz11a1")); // 12
