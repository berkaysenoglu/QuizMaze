import React, { useEffect } from "react";
import "../../styles/introduce.scss";
import QuizMazeLogo from "../../assets/logos/QuizMaze-logo.png";
import { DropdownDifficulty } from "../../components/Dropdown";
import { Button, Select } from "antd";
import { ConfigProvider } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Introduce = () => {
  const navigate = useNavigate();
  const difficulty = ["easy", "medium", "hard"];
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const categories = [
    {
      id: 9,
      name: "General Knowledge",
    },
    {
      id: 10,
      name: "Entertainment: Books",
    },
    {
      id: 11,
      name: "Entertainment: Film",
    },
    {
      id: 12,
      name: "Entertainment: Music",
    },
    {
      id: 13,
      name: "Entertainment: Musicals & Theatres",
    },
    {
      id: 14,
      name: "Entertainment: Television",
    },
    {
      id: 15,
      name: "Entertainment: Video Games",
    },
    {
      id: 16,
      name: "Entertainment: Board Games",
    },
    {
      id: 17,
      name: "Science & Nature",
    },
    {
      id: 18,
      name: "Science: Computers",
    },
    {
      id: 19,
      name: "Science: Mathematics",
    },
    {
      id: 20,
      name: "Mythology",
    },
    {
      id: 21,
      name: "Sports",
    },
    {
      id: 22,
      name: "Geography",
    },
    {
      id: 23,
      name: "History",
    },
    {
      id: 24,
      name: "Politics",
    },
    {
      id: 25,
      name: "Art",
    },
    {
      id: 26,
      name: "Celebrities",
    },
    {
      id: 27,
      name: "Animals",
    },
    {
      id: 28,
      name: "Vehicles",
    },
    {
      id: 29,
      name: "Entertainment: Comics",
    },
    {
      id: 30,
      name: "Science: Gadgets",
    },
    {
      id: 31,
      name: "Entertainment: Japanese Anime & Manga",
    },
    {
      id: 32,
      name: "Entertainment: Cartoon & Animations",
    },
  ];

  const startQuiz = () => {
    const categoryParam = selectedCategory || "any";
    const difficultyParam = selectedDifficulty || "any";
    navigate(`quiz/${categoryParam}/${difficultyParam}`);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            defaultBg: "#6D33EA",
            defaultHoverBg: "#7A26C1",
            defaultColor: "#ffff",
            defaultHoverColor: "#ffff",
            defaultActiveBorderColor: "#ffff",
            defaultHoverBorderColor: "#ffff",
          },
        },
      }}
    >
      <div className="introduce">
        <div className="introduce-container">
          <img src={QuizMazeLogo} alt="" />
          <Select
            style={{ width: "300px", marginBottom: " 10px" }}
            placeholder="Select category"
            optionFilterProp="children"
            onChange={(value) => setSelectedCategory(value)}
            options={categories.map((category) => ({
              value: `${category.id}`,
              label: `${category.name}`,
            }))}
          />
          <DropdownDifficulty
            difficulty={difficulty}
            setSelectedDifficulty={setSelectedDifficulty}
          />
          <Button onClick={startQuiz}>Start Quiz</Button>
        </div>
      </div>
    </ConfigProvider>
  );
};
