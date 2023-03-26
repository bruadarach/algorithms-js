function solution(food) {
  let answer = "";
  food.forEach((num, idx) => {
    if (num >= 2) {
      answer += String(idx).repeat(Math.floor(num / 2));
    }
  });
  return answer + "0" + [...answer].reverse().join("");
}

console.log(solution([1, 3, 4, 6])); //"1223330333221"
console.log(solution([1, 7, 1, 2])); //	"111303111"
