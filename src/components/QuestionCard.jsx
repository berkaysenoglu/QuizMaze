import "../styles/questionCard.scss";
import React, { useEffect, useState } from "react";
import he from "he";
const QuestionCard = ({
  questionsData,
  score,
  setScore,
  count,
  setCount,
  modal,
  setModal,
  setWrongQuestions,
  wrongQuestions,
}) => {
  const [timer, setTimer] = useState(30);

  const approvedChoice = (answer) => {
    const checkAnswer = answer == questionsData[count]?.correct_answer;

    if (checkAnswer) {
      setScore(score + 100);
    } else {
      setWrongQuestions((prevWrongQuestions) => [
        ...prevWrongQuestions,
        {
          question: questionsData[count],
          wrongAnswer: answer,
        },
      ]);
    }
    setCount(count + 1);
    if (count == 9) {
      setModal(true);
    }
    setTimer(30);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
      if (timer == 0 && count < 10) {
        setCount(count + 1);
        setTimer(30);
      } else if (count >= 10) {
        setModal(true);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  return (
    <div className="questionCard">
      <div className="questionCard-timer">{timer}</div>
      <div className="questionCard-title">
        {" "}
        {count + 1}/10 -{" "}
        {questionsData[count]?.question
          ? he.decode(questionsData[count]?.question)
          : ""}
      </div>
      {questionsData[count]?.answers?.map((answer, i) => (
        <button onClick={() => approvedChoice(answer)} key={i}>
          {he.decode(answer)}
        </button>
      ))}
    </div>
  );
};

export default QuestionCard;
