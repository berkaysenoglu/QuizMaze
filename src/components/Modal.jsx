import React from "react";
import "../styles/modal.scss";
import { Link, useNavigate } from "react-router-dom";
import ResultsTable from "./Table";
const Modal = ({ score, setWrongQuestions, wrongQuestions }) => {
  const navigate = useNavigate();
  const handleRestart = () => {
    setWrongQuestions([]);
    navigate("/");
  };
  return (
    <div className="modal-container">
      <div className="modal-table-container">
        <ResultsTable wrongQuestions={wrongQuestions} />
      </div>
      <div className="modal">
        <div className="modal-title">Your score : {score}</div>
        <div onClick={handleRestart} className="modal-btn">
          <Link
            to={"/"}
            relative="path"
            style={{ color: "white", textDecoration: "none" }}
          >
            Start Again
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
