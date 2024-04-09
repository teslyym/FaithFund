import React from "react";

const PaymentInfo = () => {
  return (
    <div>
      <div className="w-[428px]- rounded-lg">
        <div className="w-[380px]">
          <div className="bg-white w-full pl-4 outline-none focus:border-black valid:border-[#017358]">
            <input
              type="text"
              placeholder="Card Name"
              className="flex border border-[#9DA39F] rounded-lg  px-2 py-3 items-center  w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;
