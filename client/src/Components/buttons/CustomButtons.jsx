import React from "react";
import "./customButton.css";

const CustomButtons = ({ icon, text, button_width, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      className={`button`}
      style={{
        width: button_width,
      }}
    >
      <div className="button-wrapper">
        <div className="text">
          {icon} {text}
        </div>
        <span className="icon">
          {icon} {text}
        </span>
      </div>
    </div>
  );
};

export default CustomButtons;
