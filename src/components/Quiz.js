import React, { useEffect, useState } from "react";

const Quiz = ({ data, questionNumber, setQuestionNumber, setTimeOut }) => {
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);
  return (
    <div className="trivia">
      <div className="question">{question.question}</div>
      <div className="answers">
        {question.answers.map((ans) => (
          <div className="answer">{ans.text}</div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
