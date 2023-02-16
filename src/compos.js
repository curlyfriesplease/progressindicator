import { React, useState } from 'react';
import { NodeGroup } from 'react-move'
import { interpolate, interpolateTransformSvg } from 'd3-interpolate'

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
  let questions = [];
  for (let i = 0; i < questionCount; i++) {
    questions.push(
      <ProgressQuestionUnit key={`questionId${i + 1}`} name={i + 1} />
    );
    console.log(`questionId${i + 1}`);
  }
  console.log(questions);

  return (
    <div id="progressBarDiv" className="progressBar">
      <NodeGroup
        data={questions}
        keyAccessor={(d) => d.key}

        start={(data, index) => ({
          ...
        })}

        enter={(data, index) => ([ // An array
          ...
        ])}

        update={(data) => ({
          ...
        })}

        leave={() => ({
          ...
        })}

        interpolation ={(begValue, endValue, attr) => { // pass as prop
          if (attr === 'transform') {
            return interpolateTransformSvg(begValue, endValue)
          }

          return interpolate(begValue, endValue)
        }}
      >
  ...children
    </NodeGroup>
    </div>
  );
};
