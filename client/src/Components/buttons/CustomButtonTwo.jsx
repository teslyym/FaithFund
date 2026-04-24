import React from "react";
import "./customButtonTwo.css";

const CustomButtonTwo = ({ icon, text, button_width, handleClick }) => {
  return (
    <div
      style={{
        width: button_width,
      }}
      className="button--two"
      onClick={handleClick}
    >
      <div className="button--two--wrapper">
        <div className="text--two">
          {icon} {text}
        </div>
        <span className="icon--two">
          {icon} {text}
        </span>
      </div>
    </div>
  );
};

export default CustomButtonTwo;
