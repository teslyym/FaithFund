import React from "react";
import { Link } from "react-router-dom";
import CustomButtons from "./buttons/CustomButtons";

const Otp = ({ setDonationSteps }) => {
  return (
    <div>
      <div className="w-full h-screen flex flex-col justify-center pt-5 pr-6 pb-5 pl-6 top-[220px] items-center flex-wrap">
        <h1 className="">Input OTP</h1>
        <div className="flex gap-2 pt-3 justify-center">
          <div className="w-[50px] h-[50px] rounded border border-[#9DA39F]">
            <input
              type="text"
              placeholder=""
              className="flex  px-2 py-3 items-center  w-full"
            />
          </div>
          <div className="w-[50px] h-[50px] rounded border border-[#9DA39F]">
            <input
              type="text"
              placeholder=""
              className="flex  px-2 py-3 items-center  w-full"
            />
          </div>
          <div className="w-[50px] h-[50px] rounded border border-[#9DA39F]">
            <input
              type="text"
              placeholder=""
              className="flex  px-2 py-3 items-center  w-full"
            />
          </div>
          <div className="w-[50px] h-[50px] rounded border border-[#9DA39F]">
            <input
              type="number"
              placeholder=""
              className="flex  px-2 py-3 items-center  w-full"
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
