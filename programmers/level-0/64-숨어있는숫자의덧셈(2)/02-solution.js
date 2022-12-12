function solution(my_string) {
  /* 
    1. replace (/[a-z/g, " ") : (개별) 문자만 " "로 변경
    2. split(/\D+/) : 숫자가 아닌 것 기준으로 쪼개기 " " => 숫자만 남기기
  
  */

  //   return my_string
  //     .toLowerCase()
  //     .replace(/[a-z]/g, " ")
  //     .split(" ")
  //     .map((v) => v * 1) // ''*1 = 0
  //     .reduce((a, b) => a + b);

  return my_string.split(/\D+/).reduce((acc, cur) => acc + Number(cur), 0);
}

console.log(solution("aAb1B2cC34oOp")); // 37
console.log(solution("1a2b3c4d123Z")); // 133
console.log(solution("zzz111")); // 111
console.log(solution("zzz11a1")); // 12
