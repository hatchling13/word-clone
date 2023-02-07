import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { sample } from "../../utils";
import { WORDS } from "../../data";

import { HappyBanner, SadBanner } from "../Banner/Banner";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [results, setResults] = React.useState([]);
  const [guessCount, setGuessCount] = React.useState(0);
  const [gameOver, setGameOver] = React.useState(false);

  function handleResults(guess) {
    const nextResults = [...results, guess];
    setResults(nextResults);

    const nextGuessCount = guessCount + 1;
    setGuessCount(nextGuessCount);

    setGameOver(
      nextResults.includes(answer) || nextGuessCount === NUM_OF_GUESSES_ALLOWED
    );
  }

  return (
    <>
      <GuessResults results={results} answer={answer} />
      <GuessInput handleResults={handleResults} disabled={gameOver} />
      {gameOver &&
        (guessCount <= NUM_OF_GUESSES_ALLOWED && results.includes(answer) ? (
          <HappyBanner guessCount={guessCount} />
        ) : (
          <SadBanner answer={answer} />
        ))}
    </>
  );
}

export default Game;
