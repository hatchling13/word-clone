import React from "react";

function Banner({ bannerType, children }) {
  const className = bannerType ? `${bannerType} banner` : "banner";

  return <div className={className}>{children}</div>;
}

export function HappyBanner({ guessCount }) {
  const content = (
    <p>
      <strong>Congratulations!</strong> Got it in{" "}
      <strong>{guessCount} guesses</strong>.
    </p>
  );

  return <Banner bannerType={"happy"}>{content}</Banner>;
}

export function SadBanner({ answer }) {
  const content = (
    <p>
      Sorry, the correct answer is <strong>{answer}</strong>.
    </p>
  );

  return <Banner bannerType={"sad"}>{content}</Banner>;
}

export default Banner;
