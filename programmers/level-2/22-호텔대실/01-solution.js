function solution(book_time) {
  book_time.sort();
  let room = [];

  for (let i = 0; i < book_time.length; i++) {
    let [start, end] = book_time[i];
    let flag = false;

    for (let j = 0; j < room.length; j++) {
      if (room[j] <= start) {
        room[j] = end;
        flag = true;
        break;
      }
    }

    if (!flag) {
      room.push(end);
    }
  }

  return room.length;
}

console.log(
  solution([
    ["15:00", "17:00"],
    ["16:40", "18:20"],
    ["14:20", "15:20"],
    ["14:10", "19:20"],
    ["18:20", "21:20"],
  ])
); //	3
console.log(
  solution([
    ["09:10", "10:10"],
    ["10:20", "12:20"],
  ])
); //1
console.log(
  solution([
    ["10:20", "12:30"],
    ["10:20", "12:30"],
    ["10:20", "12:30"],
  ])
); //3
