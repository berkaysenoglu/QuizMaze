import React from "react";
import { Table } from "antd";
import he from "he";
const ResultsTable = ({ wrongQuestions }) => {
  const columns = [
    {
      title: "Question",
      dataIndex: "question",
      key: "question",
      render: (text, record) => he.decode(record.question.question),
    },
    {
      title: "Your Answer",
      dataIndex: "wrongAnswer",
      key: "wrongAnswer",
      render: (text, record) => he.decode(record.wrongAnswer),
    },
    {
      title: "Correct Answer",
      dataIndex: "correctAnswer",
      key: "correctAnswer",
      render: (text, record) => he.decode(record.question.correct_answer),
    },
  ];

  const dataSource = wrongQuestions.map((item, index) => ({
    key: index,
    question: item.question,
    wrongAnswer: item.wrongAnswer,
    correctAnswer: item.question.correct_answer,
  }));

  return <Table pagination={false} dataSource={dataSource} columns={columns} />;
};

export default ResultsTable;
