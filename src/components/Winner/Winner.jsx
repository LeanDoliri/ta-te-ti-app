import { Cell } from "../Cell/Cell";
import "./Winner.css";

export function Winner({ winner, resetGame }) {
  if (winner === null) return null;

  const winnerText = winner === false ? 'Empate' : 'Ganó:'
  return (
    <section className="Winner">
      <div className="text">
        <h2>{winnerText}</h2>

        <header className="win">{winner && <Cell>{winner}</Cell>}</header>

        <footer>
          <button onClick={resetGame}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  );
}
