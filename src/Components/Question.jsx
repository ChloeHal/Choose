import React from 'react';
import './question.css';

function Question({ question, onAnswer }) {
  return (
    <div className="question-card">
      <p>{question}</p>
      <div className="wrap">
        <button onClick={() => onAnswer('yes')}>Yes</button>
        <button onClick={() => onAnswer('no')}>No</button>
      </div>
    </div>
  );
}

export default Question;
