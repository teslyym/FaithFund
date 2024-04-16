import React from "react";
import profile from "../assets/profile.svg";

const User = () => {
  return (
    <div>
      <div className="flex justify-center items-center gap-4 text-base font-medium">
        <img src={profile} alt="" />
        <h1>Mustapha M. O</h1>
      </div>
    </div>
  );
};

export default User;
