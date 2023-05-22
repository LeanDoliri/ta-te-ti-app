import { Cell } from "../Cell/Cell";
import "./Game.css"

export function Game({ board, updateBoard }) {
  return (
    <section className="Game">
      {board.map((cell, index) => {
        return (
          <Cell key={index} index={index} updateBoard={updateBoard}>
            {cell}
          </Cell>
        );
      })}
    </section>
  );
}