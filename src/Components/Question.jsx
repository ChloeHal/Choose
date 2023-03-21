import React from 'react';

function Question({ question, onAnswer }) {
  return (
    <div>
      <p>{question}</p>
      <button onClick={() => onAnswer('yes')}>Yes</button>
      <button onClick={() => onAnswer('no')}>No</button>
    </div>
  );
}

export default Question;
