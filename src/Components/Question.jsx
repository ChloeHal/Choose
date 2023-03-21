import React from 'react';
import './question.css';

function Question({ question, onAnswer }) {
  return (
    
    <div className="question-card">
       <img src="./public/book/choose.png" />
<h1>I'll reveal your desired book upon your answer.</h1>
      <p>{question}</p>
      <div className="wrap">
        <button onClick={() => onAnswer('yes')}>Yes</button>
        <button onClick={() => onAnswer('no')}>No</button>
      </div>
    </div>
  );
}

export default Question;
