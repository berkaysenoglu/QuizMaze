import React from "react";
import "../styles/dropdown.scss";
import { Select } from "antd";
export const DropdownDifficulty = ({ difficulty, setSelectedDifficulty }) => {
  return (
    <Select
      style={{ marginBottom: "20px", width: "300px" }}
      placeholder="Select difficulty"
      optionFilterProp="children"
      onChange={(value) => setSelectedDifficulty(value)}
      options={difficulty.map((dt) => ({
        value: `${dt}`,
        label: `${dt.charAt(0).toUpperCase() + dt.slice(1)}`,
      }))}
    />
  );
};
