import React from "react";

const PaymentInfo = () => {
  return (
    <div className="pt-8 flex items-center justify-center">
      <div className="w-[428px]- rounded-lg">
        <div className="w-[380px]">
          <div className="bg-white w-full pl-4 outline-none focus:border-black valid:border-[#017358]">
            <input
              type="text"
              placeholder="Card Name"
              className="flex border border-[#9DA39F] rounded-lg  px-2 py-3 items-center  w-full"
            />
          </div>
          <div className="bg-white w-full pl-4 pt-4 outline-none focus:border-black valid:border-[#017358]">
            <input
              type="text"
              placeholder="Card Number"
              className="flex border border-[#9DA39F] rounded-lg  px-2 py-3 items-center  w-full"
            />
          </div>
          <div className="bg-white w-full pl-4 pt-4 outline-none focus:border-black valid:border-[#017358]">
            <input
              type="text"
              placeholder="Amount"
              className="flex border border-[#9DA39F] rounded-lg  px-2 py-3 items-center  w-full"
            />
          </div>
          <div className="flex">
            <div className="bg-white w-full pl-4 pt-4 outline-none focus:border-black valid:border-[#017358]">
              <input
                type="text"
                placeholder="000"
                className="flex border border-[#9DA39F] rounded-lg  px-2 py-3 items-center  w-full"
              />
            </div>
            <div className="bg-white w-full pl-4 pt-4 outline-none focus:border-black valid:border-[#017358]">
              <input
                type="text"
                placeholder="MM/YY"
                className="flex border border-[#9DA39F] rounded-lg  px-2 py-3 items-center  w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;
