// keep in mind about the main logic: 숫자면 숫자를 추가하고, 문자면 " "로 추가하기
// best solution => 03-solution.js
function solution(my_string) {
  count = 0;
  temp = "";
  for (let i = 0; i < my_string.length; i++) {
    if (
      Number.isInteger(Number(my_string[i])) &&
      Number.isInteger(Number(my_string[i + 1]))
    ) {
      temp += my_string[i];
    } else if (
      Number.isInteger(Number(my_string[i])) &&
      !Number.isInteger(Number(my_string[i + 1]))
    ) {
      temp += my_string[i];
      count += Number(temp);
      temp = "";
    }
  }

  return count;
}

console.log(solution("aAb1B2cC34oOp")); // 37
console.log(solution("1a2b3c4d123Z")); // 133
console.log(solution("zzz111")); // 111
console.log(solution("zzz11a1")); // 12
