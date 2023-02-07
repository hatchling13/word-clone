import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import Guess from "../Guess/Guess";

function GuessResults({ results, answer }) {
  return (
    <div className="guess-results">
      {Array.from(range(0, NUM_OF_GUESSES_ALLOWED).keys()).map((index) => (
        <Guess key={index} result={results[index]} answer={answer} />
      ))}
    </div>
  );
}

export default GuessResults;
