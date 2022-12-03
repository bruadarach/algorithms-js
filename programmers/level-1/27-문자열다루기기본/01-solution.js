function solution(s) {
  return (s.length === 4 || s.length === 6) && /^[0-9]+$/.test(s);

  /* 
        ^ : 문자열의 시작
        [] : 문자의 집합 => 0 ~ 9 표현
        + : 앞에 문자가 최소 1개 이상 있음 => 0~9 사이의 숫자의 갯수 제한이 없음을 의미
        $ : 문자열 종료
    */
}

console.log(solution("a234")); // false
console.log(solution("1234")); // true
console.log(solution("1e22")); // false
console.log(solution("10e1")); // false
