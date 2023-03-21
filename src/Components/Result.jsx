import React from 'react';

function Result({ answers, onRestart }) {
  return (
    <div>
      <p>Thank you for answering the questions!</p>
      <p>Here is the book your answers:</p>
      <ul>
        {answers.map((answer, index) => (
          <li key={index}>{answer}</li>
        ))}
      </ul>
      <div className="card">
        <img src="./public/book/test.jpg" />
        <p className="title">Titre</p>
        <p className="author">Auteur</p>
        <p classname="themes">Thèmes</p>
      </div>
      <button onClick={() => onRestart()}>Restart Quiz</button>
    </div>
  );
}

export default Result;
