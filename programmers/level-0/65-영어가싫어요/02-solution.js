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

  numbers = numbers.replaceAll(
    /one|two|three|four|five|six|seven|eight|nine|zero/g,
    (v) => match[v]
  );
  return Number(numbers);
}

console.log(solution("onetwothreefourfivesixseveneightnine")); // 123456789
console.log(solution("onefourzerosixseven")); // 14067
console.log(solution("sevensevenoneseven")); // 7717
