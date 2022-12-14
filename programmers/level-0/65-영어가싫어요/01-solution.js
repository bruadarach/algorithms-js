function solution(numbers) {
  const match = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    zero: 0,
  };

  for (num in match) numbers = numbers.replaceAll(num, match[num]);
  return Number(numbers);
}

console.log(solution("onetwothreefourfivesixseveneightnine")); // 123456789
console.log(solution("onefourzerosixseven")); // 14067
console.log(solution("sevensevenoneseven")); // 7717
