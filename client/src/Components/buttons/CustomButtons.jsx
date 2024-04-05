import React from "react";
import "./customButton.css";

const CustomButtons = ({ icon, text }) => {
  return (
    <div class="button">
      <div class="button-wrapper">
        <div class="text">
          {icon} {text}
        </div>
        <span class="icon">
          {icon} {text}
        </span>
      </div>
    </div>
  );
};

export default CustomButtons;
