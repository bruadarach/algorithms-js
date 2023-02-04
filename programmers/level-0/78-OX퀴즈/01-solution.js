function solution(quiz) {
  return quiz.map((ele) => {
    let temp = ele.split("=");
    console.log(temp);
    return eval(temp[0]) === eval(temp[1]) ? "O" : "X";

    // let [a1, a2] = ele.split(" = ");
    // return eval(a1) === eval(a2) ? "O" : "X";
  });
}

console.log(solution(["3 - 4 = -3", "5 + 6 = 11"])); // ["X", "O"]
console.log(
  solution(["19 - 6 = 13", "5 + 66 = 71", "5 - 15 = 63", "3 - 1 = 2"])
); // ["O", "O", "X", "O"]
