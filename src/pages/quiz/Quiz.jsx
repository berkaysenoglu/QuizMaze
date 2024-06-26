import React, { useEffect, useState } from "react";
import "../../styles/quiz.scss";
import { useParams } from "react-router-dom";
import * as api from "../../api/api";
import Modal from "../../components/Modal";
import QuestionCard from "../../components/QuestionCard";

export const Quiz = () => {
  const { category, difficulty } = useParams();
  const [questionsData, setQuestionsData] = useState([]);
  const [wrongQuestions, setWrongQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);
  const [modal, setModal] = useState(false);
  const getData = async () => {
    const data = await api.fetchData(category, difficulty);
    setQuestionsData(data);
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(wrongQuestions);
  return (
    <div className="quiz">
      {modal ? (
        <Modal
          wrongQuestions={wrongQuestions}
          setWrongQuestions={setWrongQuestions}
          score={score}
        />
      ) : (
        <QuestionCard
          questionsData={questionsData}
          score={score}
          setScore={setScore}
          count={count}
          setCount={setCount}
          modal={modal}
          setModal={setModal}
          setWrongQuestions={setWrongQuestions}
          wrongQuestions={wrongQuestions}
        />
      )}
    </div>
  );
};
