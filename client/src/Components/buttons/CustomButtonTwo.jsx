import React from "react";
import "./customButtonTwo.css";

const CustomButtonTwo = ({ icon, text }) => {
  return (
    <div class="button--two">
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
