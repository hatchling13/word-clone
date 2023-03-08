import React from "react";

import { checkGuess, STATUS } from "../../game-helpers";

const keyboard = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

function Keyboard({ results, answer }) {
  const checked = results
    .map((guess) => checkGuess(guess, answer))
    .flatMap((result) => result);

  const incorrect = checked.filter((item) => item.status === STATUS.incorrect);
  const misplaced = checked.filter((item) => item.status === STATUS.misplaced);
  const correct = checked.filter((item) => item.status === STATUS.correct);

  return (
    <div className="keyboard">
      {keyboard.map((line) => (
        <p key={line} className="line">
          {line.split("").map((character, index) => {
            let className = "key";

            if (correct.some((item) => item.letter === character)) {
              className += ` ${STATUS.correct}`;
            } else if (incorrect.some((item) => item.letter === character)) {
              className += ` ${STATUS.incorrect}`;
            } else if (misplaced.some((item) => item.letter === character)) {
              className += ` ${STATUS.misplaced}`;
            } else {
            }

            return (
              <span key={index} className={className}>
                {character}
              </span>
            );
          })}
        </p>
      ))}
    </div>
  );
}

export default Keyboard;
