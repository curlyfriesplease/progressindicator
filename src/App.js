import './App.css';
import { React, useState } from 'react';
import { ProgressBar, changeNumberOfQuestions, getRandomInt } from './compos';

function App() {
  const [questionCount, setQuestionCount] = useState(10);

  console.log(questionCount);
  return (
    <>
      {' '}
      <div className="App">
        <ProgressBar questionCount={questionCount} />
      </div>
      <br />
      <button
        onClick={() => {
          changeNumberOfQuestions(
            getRandomInt(6),
            setQuestionCount,
            questionCount
          );
        }}
      >
        Add some questions
      </button>
      <br />
      <button
        onClick={() => {
          changeNumberOfQuestions(
            -getRandomInt(6),
            setQuestionCount,
            questionCount
          );
        }}
      >
        Remove some questions
      </button>
      <br />
      <button
        onClick={() => {
          changeNumberOfQuestions(1, setQuestionCount, questionCount);
        }}
      >
        Add one question
      </button>
      <br />
      <button
        onClick={() => {
          changeNumberOfQuestions(-1, setQuestionCount, questionCount);
        }}
      >
        Remove one question
      </button>
    </>
  );
}

export default App;
