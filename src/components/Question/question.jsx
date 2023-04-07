import React from "react";

const Question = ({ question, dataAnswer, setDataAnswer }) => {
  return (
    <div className="question__container">
      <div className="question__title">
        <h3>{question?.questionName}</h3>
      </div>
      <div className="question__content">
        {question?.listChooses.map((choose, index) => {
          return (
            <div
              key={index}
              className={
                dataAnswer[question.id]?.id === choose?.id
                  ? "question__choose active "
                  : "question__choose"
              }
              onClick={() => {
                setDataAnswer({
                  ...dataAnswer,
                  [question.id]: choose,
                });
              }}
            >
              <p key={index}>
                {index + 1}: {choose?.content}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Question;
