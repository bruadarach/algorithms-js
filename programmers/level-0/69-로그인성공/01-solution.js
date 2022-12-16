function solution(id_pw, db) {
  for (let i = 0; i < db.length; i++) {
    if (db[i][0] === id_pw[0])
      return db[i][1] === id_pw[1] ? "login" : "wrong pw";
  }
  return "fail";
}
console.log(
  solution(
    ["meosseugi", "1234"],
    [
      ["rardss", "123"],
      ["yyoom", "1234"],
      ["meosseugi", "1234"],
    ]
  )
); // "login"
console.log(
  solution(
    ["programmer01", "15789"],
    [
      ["programmer02", "111111"],
      ["programmer00", "134"],
      ["programmer01", "1145"],
    ]
  )
); // "wrong pw"
console.log(
  solution(
    ["rabbit04", "98761"],
    [
      ["jaja11", "98761"],
      ["krong0313", "29440"],
      ["rabbit00", "111333"],
    ]
  )
); // "fail"
