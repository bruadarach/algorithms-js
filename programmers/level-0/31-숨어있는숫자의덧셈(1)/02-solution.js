// regex
function solution(my_string) {
  return [...my_string.replace(/[^0-9]/g, "")].reduce(
    (acc, cur) => acc + Number(cur),
    0
  );
}

console.log(solution("aAb1B2cC34oOp")); // 10
console.log(solution("1a2b3c4d123")); // 16
