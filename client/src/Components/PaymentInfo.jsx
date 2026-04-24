import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import CustomButtons from "./buttons/CustomButtons";

const PaymentInfo = ({ setDonationSteps }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div className="pt-8 flex items-center justify-center px-4 sm:px-6">
      <div className="w-full max-w-[428px] rounded-lg">
        <div className="w-full">
          <div className="bg-white w-full outline-none focus:border-black valid:border-[#017358]">
            <input
              type="text"
              placeholder="Card Name"
              className="flex border border-[#9DA39F] rounded-lg px-2 py-3 items-center w-full outline-none"
            />
          </div>

          <div className="bg-white w-full flex items-end pt-4 outline-none focus:border-black valid:border-[#017358] relative">
            <input
              type="text"
              placeholder="Card Number"
              className="flex border border-[#9DA39F] rounded-lg outline-none px-2 py-3 items-center w-full pr-12"
            />

            <svg
              width="40"
              height="17"
              viewBox="0 0 40 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-3 bottom-3"
            >
              {/* keep your existing svg paths here */}
            </svg>
          </div>

          <div className="bg-white w-full pt-4 outline-none focus:border-black valid:border-[#017358]">
            <input
              type="text"
              placeholder="Amount"
              className="flex border border-[#9DA39F] rounded-lg px-2 py-3 items-center w-full outline-none"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="bg-white w-full pt-4 outline-none focus:border-black valid:border-[#017358]">
              <input
                type="text"
                placeholder="000"
                className="flex border border-[#9DA39F] rounded-lg px-2 py-3 items-center w-full outline-none"
              />
            </div>

            <div className="bg-white w-full pt-4 outline-none focus:border-black valid:border-[#017358]">
              <input
                type="text"
                placeholder="MM/YY"
                className="flex border border-[#9DA39F] rounded-lg px-2 py-3 items-center w-full outline-none"
              />
            </div>
          </div>
        </div>

        <div className="pt-5 flex items-start">
          <label className="mt-1">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
          </label>

          <h1 className="ml-2 text-sm sm:text-base">
            Save card details for future payments
          </h1>
        </div>

        <div className="flex justify-center pt-6 pb-8">
          <Link>
            <CustomButtons
              handleClick={() => setDonationSteps("otp")}
              text={"Done"}
              button_width={"79px"}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;
