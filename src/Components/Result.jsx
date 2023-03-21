import React from 'react';

function Result({ answers, onRestart }) {
  return (
    <div>
      <p>Thank you for answering the questions!</p>
      <p>Here are your answers:</p>
      <ul>
        {answers.map((answer, index) => (
          <li key={index}>{answer}</li>
        ))}
      </ul>
      <button onClick={() => onRestart()}>Restart Quiz</button>
    </div>
  );
}

export default Result;
