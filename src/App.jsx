import "./App.css";
import { Cell } from "./components/Cell/Cell";

const TURNS = {
  X: "X",
  O: "O",
};

const board = Array(9).fill(null);

function App() {
  return (
    <>
      <h1>Ta Te Ti</h1>
      <section className="game">
        {
          board.map((_, index) => {
            return (
              <Cell key={index} index={index}>{index}</Cell>
            )
          })
        }
      </section>
    </>
  );
}

export default App;
