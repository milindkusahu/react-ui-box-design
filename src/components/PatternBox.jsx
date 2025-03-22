import React from "react";
import "./PatternBox.css";

const PatternBox = () => {
  return (
    <div className="square-pattern">
      <div className="red-square top-left"></div>
      <div className="red-square bottom-left"></div>
      <div className="red-square center"></div>
      <div className="black-square top-right"></div>
      <div className="black-square bottom-right"></div>
    </div>
  );
};

export default PatternBox;
