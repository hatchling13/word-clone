import React from "react";

import { range } from "../../utils";

function Guess({ result }) {
  return (
    <p className="guess">
      {Array.from(range(0, 5).keys()).map((index) =>
        result === undefined ? (
          <span key={index} className="cell"></span>
        ) : (
          <span key={index} className="cell">
            {result[index]}
          </span>
        )
      )}
    </p>
  );
}

export default Guess;
