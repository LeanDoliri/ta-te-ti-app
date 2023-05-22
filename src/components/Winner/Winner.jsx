import { Cell } from "../Cell/Cell";
import "./Winner.css";

export function Winner({ winner, resetGame }) {
  if (winner === null) return null;
  const winnerText = winner === false ? "Empate" : "Ganador:";

  return (
    <section className="Winner">
      <div className="text">
        <h1>{winnerText}</h1>
        <header>{winner && <Cell>{winner}</Cell>}</header>
        <footer>
          <button className="button" onClick={resetGame}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  );
}
