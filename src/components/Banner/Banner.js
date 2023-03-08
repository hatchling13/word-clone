import React from "react";

function Banner({ bannerType, handleRestart, children }) {
  const className = bannerType ? `${bannerType} banner` : "banner";

  return (
    <div className={className}>
      {children}
      <button onClick={handleRestart}>Restart game</button>
    </div>
  );
}

export function HappyBanner({ guessCount, handleRestart }) {
  const content = (
    <p>
      <strong>Congratulations!</strong> Got it in{" "}
      <strong>{guessCount} guesses</strong>.
    </p>
  );

  return (
    <Banner bannerType={"happy"} handleRestart={handleRestart}>
      {content}
    </Banner>
  );
}

export function SadBanner({ answer, handleRestart }) {
  const content = (
    <p>
      Sorry, the correct answer is <strong>{answer}</strong>.
    </p>
  );

  return (
    <Banner bannerType={"sad"} handleRestart={handleRestart}>
      {content}
    </Banner>
  );
}

export default Banner;
