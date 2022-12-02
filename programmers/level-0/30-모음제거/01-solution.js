function solution(my_string) {
  ["a", "e", "i", "o", "u"].forEach((ele) => {
    my_string = my_string.replaceAll(ele, "");
  });

  return my_string;

  //    return my_string.replace(/[aeiou]/g, "");
  //    return my_string.replaceAll(/[aeiou]/g, "");
}
console.log(solution("bus")); // 'bs'
console.log(solution(solution("nice to meet you"))); // "nc t mt y"
