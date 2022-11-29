function solution(s) {
  return (
    s
      .split(" ")
      // .map((ele) => ele[0].toUpperCase() + ele.slice(1).toLowerCase())
      .map((ele) => ele.charAt(0).toUpperCase() + ele.slice(1).toLowerCase())
      .join(" ")
  );
}

console.log(solution("3people unFollowed me")); // "3people Unfollowed Me"
console.log(solution("for the last week")); // "For The Last Week"
console.log(solution("for   the last week")); // "For   The Last Week"
