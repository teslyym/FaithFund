import React from "react";
import { Link } from "react-router-dom";
import CustomButtons from "./buttons/CustomButtons";

const SuccessfulPayment = () => {
  return (
    <div className="grid place-items-center h-screen">
      <div className=" max-w-[233px] mx-auto text-center">
        <h1>Success</h1>
        <h1>
          Jazakumullahu Khayran!!! May Almighty Allah continue to bless you.
        </h1>
        <Link
          to={"/"}
          className=" grid place-items-center pt-4 w-full items-center"
        >
          <CustomButtons text={"Back Home"} button_width={"171px"} />
        </Link>
      </div>
    </div>
  );
};

export default SuccessfulPayment;
