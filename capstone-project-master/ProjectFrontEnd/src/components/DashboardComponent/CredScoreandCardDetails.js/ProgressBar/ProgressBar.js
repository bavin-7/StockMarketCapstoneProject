import React, { useState, useEffect } from "react";
import "./ProgressBar.css";

function CreditScoreProgressBar({ creditScore }) {
  const minCreditScore = 350;
  const maxCreditScore = 850;
  const [progress, setProgress] = useState(0);
  const [creditScoreLabel, setCreditScoreLabel] = useState("");
  const [colorGradient, setColorGradient] = useState(
    "linear-gradient(to right, #ff4e33eb, #ffeb33fe, #33ff8f)"
  ); // Default gradient

  const normalizedCreditScore = Math.min(
    Math.max(creditScore, minCreditScore),
    maxCreditScore
  );

  useEffect(() => {
    const progressPercentage =
      ((normalizedCreditScore - minCreditScore) /
        (maxCreditScore - minCreditScore)) *
      100;

    setProgress(progressPercentage);

    const creditScoreRanges = [
      { min: 350, max: 579, label: "Poor" },
      { min: 580, max: 669, label: "Fair" },
      { min: 670, max: 799, label: "Very Good" },
      { min: 800, max: 850, label: "Excellent" },
    ];

    const scoreLabel = creditScoreRanges.find(
      (range) =>
        normalizedCreditScore >= range.min && normalizedCreditScore <= range.max
    );

    // Dynamically set the color gradient based on credit rating
    if (scoreLabel.label === "Poor") {
      setColorGradient("linear-gradient(to right, darkred, red)");
      setCreditScoreLabel("Poor");
    } else if (scoreLabel.label === "Fair") {
      setColorGradient("linear-gradient(to right,red,#ffb133eb,#fffc33eb)");
      setCreditScoreLabel("Fair");
    } else if (scoreLabel.label === "Very Good") {
      setColorGradient("linear-gradient(to right,red,#b4ff33fe,#63ff33)");
      setCreditScoreLabel("Very Good");
    } else if (scoreLabel.label === "Excellent") {
      setColorGradient("linear-gradient(to right,red,#63ff33,#33ff8f)");
      setCreditScoreLabel("Excellent");
    } else {
      setColorGradient(
        "linear-gradient(to right, #ff4e33eb, #ffeb33fe, #33ff8f)"
      );
    }
  }, [creditScore]);

  const progressStyle = {
    width: `${progress}%`,
    background: colorGradient, // Set the background gradient dynamically
  };

  return (
    <div className={`credit-score-progress-bar`} style={{color:"#652CB3"}}>
      <h1>My Credit Score is:</h1>
      <div className="credit-scores">
        <h1>{normalizedCreditScore}</h1>
        <small className="credit-score-label">{creditScoreLabel}</small>
      </div>
      <div className="progress">
        <div className="bar">
          <div className="progress" style={progressStyle}></div>
        </div>
      </div>
      <div className="labels">
        <span className="min-label">350</span>
        <span className="max-label">850</span>
      </div>
    </div>
  );
}

export default CreditScoreProgressBar;
