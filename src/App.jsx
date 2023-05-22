import { useState } from "react";
import "./App.css";
import { Turn } from "./components/Turn/Turn";
import { Winner } from "./components/Winner/Winner";
import { checkWinner, checkEndGame } from "./logic/board";
import { TURNS } from "./constants.js"
import { Game } from "./components/Game/Game";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

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
  };

  return (
    <>
      <h1>Ta Te Ti</h1>
      <Game board={board} updateBoard={updateBoard}/>
      <Turn TURNS={TURNS} turn={turn} />
      <Winner winner={winner} resetGame={resetGame} />
    </>
  );
}

export default App;
