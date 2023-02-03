import { React, useState, useRef, useEffect } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';

export function getRandomInt(max) {
  const ranNum = Math.floor(Math.random() * max);
  console.log(`random number: ${ranNum + 1}`);
  return ranNum + 1;
}

export function changeNumberOfQuestions(num, setQuestionCount, questionCount) {
  setQuestionCount(questionCount + num);
  if (questionCount < 7) {
    setQuestionCount(7);
  }
}

const ProgressQuestionUnit = ({ name }) => {
  console.log(`PROPS: ${name}`);
  return <div className="progessQuestionUnit">x</div>;
};

export const ProgressBar = ({ questionCount }) => {
  const [parent, enableAnimations] = useAutoAnimate({ duration: 2000 });
  const [questionsElementsArray, setQuestionsElementsArray] = useState([]);
  const oldCountValue = useRef();

  if (questionsElementsArray.length === 0) {
    console.log(
      `🥶🥶🥶 Initial render of ProgressBar. Questions: ${questionsElementsArray.length}`
    );
    console.log(questionsElementsArray);
    oldCountValue.current = questionCount;
    let tempArray = [];
    for (let i = 0; i < questionCount; i++) {
      console.log(`Adding a thing, number ${i + 1}`);
      tempArray.push(
        <ProgressQuestionUnit key={`questionId${i + 1}`} name={i + 1} />
      );
    }
    console.log(`tempArray: ${tempArray}`);
    console.dir(tempArray);
    setQuestionsElementsArray(tempArray);
    console.log(`new questions length: ${questionsElementsArray.length}`);
  }

  useEffect(() => {
    console.log('🎃🎃🎃 QuestionCount has changed');
    const changeInQuestions = questionCount - oldCountValue.current;
    console.log(
      `👅👅👅 Calculated difference in questions is ${changeInQuestions}`
    );
    if (changeInQuestions === 0) {
      return;
    }
    if (changeInQuestions > 0) {
      for (let i = 0; i < changeInQuestions; i++) {
        setQuestionsElementsArray([
          ...questionsElementsArray,
          <ProgressQuestionUnit
            key={`questionId${questionsElementsArray.length + 1}`}
            name={questionsElementsArray.length + 1}
          />,
        ]);
      }
    }
    if (changeInQuestions < 0) {
      for (let i = 0; i < changeInQuestions; i++) {
        setQuestionsElementsArray([...questionsElementsArray].pop());
      }
    }
  }, [questionCount]);

  console.log('questionsElementsArray:');
  console.log(questionsElementsArray);
  return (
    <div id="progressBarDiv" className="progressBar" ref={parent}>
      {questionsElementsArray}
    </div>
  );
};
