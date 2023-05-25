import { WINNER_COMBOS } from "../constants";

export function checkWinner (boardToCheck) {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
  return null;
};

export function checkEndGame (newBoard) {
  return newBoard.every((cell) => cell !== null);
};
