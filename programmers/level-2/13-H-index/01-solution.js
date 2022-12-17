function solution(citations) {
  citations.sort((a, b) => b - a);
  let i = 0;
  while (i + 1 <= citations[i]) i++;
  return i;

  //   return citations.sort((a, b) => b - a).filter((v, i) => i + 1 <= v).length;
}

console.log(solution([3, 0, 6, 1, 5], 3));
