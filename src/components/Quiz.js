import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import Play from "../assets/sounds/play.mp3";
import correct from "../assets/sounds/correct.mp3";
import wrong from "../assets/sounds/wrong.mp3";
const Quiz = ({ data, questionNumber, setQuestionNumber, setStop }) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");

  const [letsPlay] = useSound(Play);
  const [correctAsnwer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);

  useEffect(() => {
    letsPlay();
  }, [letsPlay]);

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };
  const handleClick = (ans) => {
    setSelectedAnswer(ans);
    setClassName("answer active");
    delay(3000, () =>
      setClassName(ans.correct ? "answer correct" : "answer wrong")
    );
    delay(6000, () => {
      if (ans.correct) {
        correctAsnwer();
        setQuestionNumber((prev) => prev + 1);
        setSelectedAnswer(null);
      } else {
        setStop(true);
      }
    });
  };

  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers?.map((ans, index) => (
          <div
            key={index}
            onClick={() => handleClick(ans)}
            className={selectedAnswer === ans ? className : "answer"}
          >
            {ans.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
