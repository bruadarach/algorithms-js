function solution(k, tangerine) {
  let obj = {};
  tangerine.forEach((t) => (obj[t] ? (obj[t] += 1) : (obj[t] = 1)));
  //   tangerine.forEach((t) => (obj[t] = ++obj[t] || 1));
  let objSorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);
  //   objSorted = Object.values(list).sort((a, b) => b - a);

  let answer = 0;
  let sum = 0;
  for (let i = 0; i < objSorted.length; i++) {
    answer++;
    sum += objSorted[i][1];
    if (sum >= k) return answer;
  }
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3])); //3
console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3])); //2
console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3])); //1
