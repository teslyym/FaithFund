import React from "react";
import CustomButtons from "./buttons/CustomButtons";
import CustomButtonTwo from "./buttons/CustomButtonTwo";

const Confirmation = ({ setDonationSteps }) => {
  return (
    <div>
      <div className="w-full h-screen flex flex-col justify-center pt-5 pr-6 pb-5 pl-6 top-[220px] items-center flex-wrap">
        <h1 className="">Confirm Payment</h1>
        <div className="flex gap-2 pt-3 justify-center">
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
