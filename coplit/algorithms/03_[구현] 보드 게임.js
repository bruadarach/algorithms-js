// LOOK UP TABLE을 사용한다면 조건문을 추상화시킬 수 있습니다.
function boardGame(board, operation) {
  // TODO: 여기에 코드를 작성하세요.
  const DIR = {
    U: [-1, 0],
    D: [1, 0],
    L: [0, -1],
    R: [0, 1],
  };
  const LEN = board.length;
  const isValid = (y, x) => 0 <= y && y < LEN && 0 <= x && x < LEN;

  let Y = 0;
  let X = 0;
  let score = 0;
  for (let i = 0; i < operation.length; i++) {
    const [dY, dX] = DIR[operation[i]];
    Y += dY;
    X += dX;
    if (isValid(Y, X) === false) return "OUT";
    score += board[Y][X];
  }
  return score;
}

const board1 = [
  [0, 0, 0, 1],
  [1, 1, 1, 0],
  [1, 1, 0, 0],
  [0, 0, 0, 0],
];
const output1 = boardGame(board1, "RRDLLD");
console.log(output1); // 4

const board2 = [
  [0, 0, 1],
  [1, 1, 1],
  [1, 0, 0],
];
const output2 = boardGame(board2, "UUUDD");
console.log(output2); // 'OUT'

const board3 = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0],
];
const output3 = boardGame(board3, "DDRRRUDUDUD");
console.log(output3); // 0
