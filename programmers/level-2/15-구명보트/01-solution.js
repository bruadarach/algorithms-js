function solution(people, limit) {
  let result = 0;
  people.sort((a, b) => b - a);

  for (let i = 0, j = people.length - 1; i <= j; i++) {
    if (people[i] + people[j] <= limit) j--;
    result++;
  }
  return result;
}

console.log(solution([70, 50, 80, 50], 100)); //	3
console.log(solution([70, 80, 50], 100)); //	3
