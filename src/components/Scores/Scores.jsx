import "./Scores.css"

export function Scores({ TURNS, scores }) {
  return (
    <section className="scores">
      <span className="scores-player">
        {TURNS.X}: {scores.X}
      </span>
      |
      <span className="scores-player">
        {scores.O} :{TURNS.O}
      </span>
    </section>
  );
}
