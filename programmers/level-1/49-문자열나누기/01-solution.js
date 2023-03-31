function solution(s) {
  let answer = 0;
  let cnt1 = 0,
    cnt2 = 0;
  let x = null;

  for (let char of s) {
    if (x == null) x = char;
    x == char ? cnt1++ : cnt2++;
    if (cnt1 == cnt2) {
      answer++;
      x = null;
      cnt1 = cnt2 = 0;
    }
  }

  return x ? ++answer : answer;
}

console.log(solution("banana")); // 3
console.log(solution("abracadabra")); // 6
console.log(solution("aaabbaccccabba")); // 3
