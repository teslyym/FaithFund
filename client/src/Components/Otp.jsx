import React from "react";
import { Link } from "react-router-dom";
import CustomButtons from "./buttons/CustomButtons";

const Otp = ({ setDonationSteps }) => {
  return (
    <div>
      <div className="w-full min-h-screen flex flex-col justify-center items-center px-4 sm:px-6">
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-center">
          Input OTP
        </h1>

        <div className="flex gap-2 sm:gap-3 pt-4 justify-center flex-wrap">
          <div className="w-11 h-11 sm:w-[50px] sm:h-[50px] rounded border border-[#9DA39F]">
            <input
              type="text"
              placeholder=""
              className="w-full h-full px-2 text-center outline-none"
            />
          </div>

          <div className="w-11 h-11 sm:w-[50px] sm:h-[50px] rounded border border-[#9DA39F]">
            <input
              type="text"
              placeholder=""
              className="w-full h-full px-2 text-center outline-none"
            />
          </div>

          <div className="w-11 h-11 sm:w-[50px] sm:h-[50px] rounded border border-[#9DA39F]">
            <input
              type="text"
              placeholder=""
              className="w-full h-full px-2 text-center outline-none"
            />
          </div>

          <div className="w-11 h-11 sm:w-[50px] sm:h-[50px] rounded border border-[#9DA39F]">
            <input
              type="number"
              placeholder=""
              className="w-full h-full px-2 text-center outline-none"
            />
          </div>
        </div>

        <Link className="pt-6">
          <CustomButtons
            handleClick={() => setDonationSteps("confirmation")}
            text={"Done"}
            button_width={"79px"}
          />
        </Link>
      </div>
    </div>
  );
};

export default Otp;
