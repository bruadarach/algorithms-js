function solution(hp) {
  let count = 0;
  count += Math.floor(hp / 5);
  hp = hp % 5;
  count += Math.floor(hp / 3);
  hp = hp % 3;
  return count + hp;

  // return Math.floor(hp/5) + Math.floor((hp%5)/3) + (hp%5)%3
}

console.log(solution(23)); // 5
console.log(solution(24)); // 6
console.log(solution(999)); // 201
