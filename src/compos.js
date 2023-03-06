import { React, useState } from 'react';
import './compos.css';

export function getRandomInt(max) {
  const ranNum = Math.floor(Math.random() * max);
  console.log(ranNum + 1);
  return ranNum + 1;
}

export function changeNumberOfQuestions(num, setQuestionCount, questionCount) {
  setQuestionCount(questionCount + num);
  if (questionCount < 7) {
    setQuestionCount(7);
  }
}

const ProgressQuestionUnit = ({ key, name }) => {
  return <div key={key} className="progessQuestionUnit" />;
};

export const ProgressBar = ({ questionCount }) => {
  let questions = [];
  for (let i = 0; i < questionCount; i++) {
    questions.push(
      <ProgressQuestionUnit key={`questionId${i + 1}`} name={i + 1} />
    );
  }
  console.log(questions);

  return (
    <div id="progressBarDiv" className="progressBar">
      {questions}
    </div>
  );
};
