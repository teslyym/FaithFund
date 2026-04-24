import React from "react";
import CustomButtons from "./buttons/CustomButtons";
import CustomButtonTwo from "./buttons/CustomButtonTwo";

const Confirmation = ({ setDonationSteps }) => {
  return (
    <div>
      <div className="w-full min-h-screen flex flex-col justify-center items-center px-4 sm:px-6">
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-center">
          Confirm Payment
        </h1>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 justify-center items-center">
          <CustomButtons
            handleClick={() => setDonationSteps("success-payment")}
            text={"Yes"}
            button_width={"79px"}
          />

          <CustomButtonTwo
            handleClick={() => {
              console.log("hello");
              setDonationSteps("donate");
            }}
            text={"No"}
            button_width={"79px"}
          />
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
