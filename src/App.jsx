import { useState } from "react";
import "./App.css";
import { Turn } from "./components/Turn/Turn";
import { Winner } from "./components/Winner/Winner";
import { checkWinner, checkEndGame } from "./logic/board";
import { TURNS } from "./constants.js";
import { Game } from "./components/Game/Game";

function App() {
  const [board, setBoard] = useState(() => {
    const boardInLs = window.localStorage.getItem("board");
    return boardInLs ? JSON.parse(boardInLs) : Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    const turnInLs = window.localStorage.getItem("turn");
    return turnInLs ? JSON.parse(turnInLs) : TURNS.X;
  });
  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    window.localStorage.setItem("board", JSON.stringify(newBoard));
    window.localStorage.setItem("turn", JSON.stringify(newTurn));

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    window.localStorage.clear("turn");
    window.localStorage.clear("board");
  };

  return (
    <>
      <h1>Ta Te Ti</h1>
      <Game board={board} updateBoard={updateBoard} />
      <Turn TURNS={TURNS} turn={turn} />
      <Winner winner={winner} resetGame={resetGame} />
      <button className="button" onClick={resetGame}>
        Reiniciar juego
      </button>
    </>
  );
}

export default App;
