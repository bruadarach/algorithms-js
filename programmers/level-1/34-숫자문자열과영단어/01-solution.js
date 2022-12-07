function solution(s) {
  const table = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  let result = "";
  while (s.length > 0) {
    if (!Number.isInteger(Number(s[0]))) {
      for (let j = 3; j <= 5; j++) {
        if (table[s.slice(0, j)] !== undefined) {
          result += table[s.slice(0, j)];
          s = s.slice(j);
          break;
        }
      }
    } else {
      result += s[0];
      s = s.slice(1);
    }
  }
  return Number(result);
}

console.log(solution("one4seveneight")); // 1478
console.log(solution("23four5six7")); // 234567
console.log(solution("2three45sixseven")); // 234567
console.log(solution("123")); // 123
