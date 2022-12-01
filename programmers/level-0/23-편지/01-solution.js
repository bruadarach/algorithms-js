function solution(message) {
  return message.split("").length * 2;
  // [...message].length*2
  // message.length*2
}

console.log(solution("happy birthday!")); // 30
console.log(solution("I love you~")); // 22
