function solution(people, limit) {
  people.sort((a, b) => a - b);

  for (var i = 0, j = people.length - 1; i < j; j--) {
    if (people[i] + people[j] <= limit) i++;
  }
  return people.length - i;
}

console.log(solution([70, 50, 80, 50], 100)); //	3
console.log(solution([70, 80, 50], 100)); //	3
