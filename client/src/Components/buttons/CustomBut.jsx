import React from "react";
import "./customBut.css";

const CustomBut = ({ icon, text }) => {
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

export default CustomBut;
