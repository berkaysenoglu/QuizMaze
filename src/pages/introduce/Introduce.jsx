import React from "react";
import "../../styles/introduce.scss";
import QuizMazeLogo from "../../assets/logos/QuizMaze-logo.png";
import { DropdownDifficulty } from "../../components/Dropdown";
export const Introduce = () => {
  return (
    <div className="introduce">
      <div className="introduce-container">
        <img src={QuizMazeLogo} alt="" />
        <DropdownDifficulty />
      </div>
    </div>
  );
};
