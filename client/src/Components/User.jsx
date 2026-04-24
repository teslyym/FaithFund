import React from "react";
import profile from "../assets/profile.svg";

const User = () => {
  return (
    <div>
      <div className="flex justify-center items-center gap-2 sm:gap-3 md:gap-4 text-sm sm:text-base md:text-lg font-medium">
        <img
          src={profile}
          alt=""
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-cover"
        />
        <h1 className="truncate">Mustapha M. O</h1>
      </div>
    </div>
  );
};

export default User;
