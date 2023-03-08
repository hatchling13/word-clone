import React from "react";

import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ result, answer }) {
  const check = checkGuess(result, answer);

  return (
    <p className="guess">
      {Array.from(range(0, 5).keys()).map((index) => {
        const className = check ? `cell ${check[index].status}` : "cell";

        return (
          <span key={index} className={className}>
            {result && result[index]}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
