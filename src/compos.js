import { React, useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';

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
  return <div key={key} className="progessQuestionUnit"></div>;
};

export const ProgressBar = ({ questionCount }) => {
  const [parent, enableAnimations] = useAutoAnimate({ duration: 2000 });
  let questions = [];
  for (let i = 0; i < questionCount; i++) {
    questions.push(
      <ProgressQuestionUnit key={`questionId${i + 1}`} name={i + 1} />
    );
  }
  console.log(questions);

  return (
    <div id="progressBarDiv" className="progressBar" ref={parent}>
      {questions}
    </div>
  );
};
