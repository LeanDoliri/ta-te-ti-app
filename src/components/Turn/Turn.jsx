import './Turn.css'
import { Cell } from "../Cell/Cell";


export function Turn({ TURNS, turn }) {
  return <section className="Turn">
    <Cell isSelected={turn === TURNS.X}>
        {TURNS.X}
    </Cell>
    <Cell isSelected={turn === TURNS.O}>
        {TURNS.O}
    </Cell>
  </section>;
}