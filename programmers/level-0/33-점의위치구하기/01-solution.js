function solution(dot) {
  if (dot[0] > 0 && dot[1] > 0) return 1;
  else if (dot[0] < 0 && dot[1] > 0) return 2;
  else if (dot[0] < 0 && dot[1] < 0) return 3;
  else if (dot[0] > 0 && dot[1] < 0) return 4;

  // return dot[0] > 0 ? dot[1] > 0 ? 1 : 4 : dot[1] > 0 ? 2 : 3;
}

console.log(solution([2, 4])); // 1
console.log(solution([-7, 9])); // 2
