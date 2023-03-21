import React from "react";

function Question({ currentQuestion, handleAnswer }) {
  return (
    <div>
      <p>{currentQuestion}</p>
      <button onClick={() => handleAnswer("yes")}>Yes</button>
      <button onClick={() => handleAnswer("no")}>No</button>
    </div>
  );
}

export default Question;
