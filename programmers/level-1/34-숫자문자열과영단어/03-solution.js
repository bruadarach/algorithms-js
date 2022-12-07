function solution(s) {
  const number = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  //   for (i = 0; i < number.length; i++) {
  //     s = s.split(number[i]).join(i);
  //   }
  //   return s;

  /* 
  
    위의 코드보다 아래 코드가 훨씬 느리다. 아래 코드가 거의 2배 이상 빠르다. 
  */
  let answer = s;
  for (let i = 0; i < number.length; i++) {
    let arr = answer.split(number[i]);
    answer = arr.join(i);
  }
  return Number(answer);
}

console.log(solution("one4seveneight")); // 1478
console.log(solution("23four5six7")); // 234567
console.log(solution("2three45sixseven")); // 234567
console.log(solution("123")); // 123
