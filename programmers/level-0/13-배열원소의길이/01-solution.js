function solution(strlist) {
  //   return strlist.map((ele) => {
  //     return ele.length;
  //   });
  return strlist.map((ele) => ele.length);
}

console.log(solution(["We", "are", "the", "world!"])); // [ 2, 3, 3, 6 ]
console.log(solution(["I", "Love", "Programmers."])); // [ 1, 4, 12 ]
