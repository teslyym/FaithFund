import React from "react";
import { Link } from "react-router-dom";
import CustomButtons from "./buttons/CustomButtons";

const SuccessfulPayment = () => {
  return (
    <div className="grid place-items-center min-h-screen px-4">
      <div className="w-full max-w-sm mx-auto text-center">
        <h1 className="text-xl sm:text-2xl font-semibold">Success</h1>

        <h1 className="text-sm sm:text-base mt-2 leading-relaxed">
          Jazakumullahu Khayran!!! May Almighty Allah continue to bless you.
        </h1>

        <Link to={"/"} className="grid place-items-center pt-4 w-full">
          <CustomButtons text={"Back Home"} button_width={"171px"} />
        </Link>
      </div>
    </div>
  );
};

export default SuccessfulPayment;
