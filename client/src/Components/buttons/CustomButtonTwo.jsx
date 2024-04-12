import React from "react";
import "./customButtonTwo.css";

const CustomButtonTwo = ({ icon, text, button_width, handleClick }) => {
  return (
    <div
      style={{
        width: button_width,
      }}
      class="button--two"
      onClick={handleClick}
    >
      <div class="button--two--wrapper">
        <div class="text--two">
          {icon} {text}
        </div>
        <span class="icon--two">
          {icon} {text}
        </span>
      </div>
    </div>
  );
};

export default CustomButtonTwo;
