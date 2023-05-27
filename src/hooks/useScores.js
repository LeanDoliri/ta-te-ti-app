import { useEffect, useState } from "react";
import { TURNS } from "../constants";

export function useScores({ winner }) {
  const [scores, setScores] = useState({ X: 0, O: 0 });

  useEffect(() => {
    if (winner === TURNS.X) {
      const victorysX = scores.X + 1;
      const victorysO = scores.O;
      setScores({ X: victorysX, O: victorysO });
    } else if (winner === TURNS.O) {
      const victorysX = scores.X;
      const victorysO = scores.O + 1;
      setScores({ X: victorysX, O: victorysO });
    }
  }, [winner]);

  return { scores, setScores };
}
