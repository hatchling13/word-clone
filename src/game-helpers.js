export const STATUS = {
  correct: "correct",
  misplaced: "misplaced",
  incorrect: "incorrect",
};

export function checkGuess(guess, answer) {
  if (!guess) {
    return null;
  }

  const guessChars = guess.toUpperCase().split("");
  const answerChars = answer.split("");

  return guessChars.map((guessChar, index) => {
    const answerChar = answerChars[index];

    let status;
    if (guessChar === answerChar) {
      status = STATUS.correct;
    } else if (answerChars.includes(guessChar)) {
      status = STATUS.misplaced;
    } else {
      status = STATUS.incorrect;
    }
    return {
      letter: guessChar,
      status,
    };
  });
}
