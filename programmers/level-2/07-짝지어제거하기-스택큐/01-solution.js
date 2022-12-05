// 효율성 테스트 실패

function solution(s) {
  const sArr = [...s];

  for (let i = 0; i < sArr.length - 1; i++) {
    if (sArr[i] === sArr[i + 1]) {
      sArr.splice(i, 2);
      i = -1;
    }
  }
  return sArr.length === 0 ? 1 : 0;
}

console.log(solution("baabaa")); // 1
console.log(solution("cdcd")); // 0
