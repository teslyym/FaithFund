import React, { useState } from "react";
import CustomButtons from "../../Components/buttons/CustomButtons";
import PaymentInfo from "../../Components/PaymentInfo";
import Otp from "../../Components/Otp";
import Confirmation from "../../Components/Confirmation";
import SuccessfulPayment from "../../Components/SuccessfulPayment";

const Donate = () => {
  const [donationSteps, setDonationSteps] = useState("donate");

  switch (donationSteps) {
    case "donate":
      return (
        <div className="rounded-lg p-4 sm:p-8 lg:p-10 pt-24 lg:pt-[10%] border w-[92%] max-w-[924px] mx-auto mb-10 shadow-[2px_2px_10px_2px_rgba(0,0,0,0.2)]">
          <div>
            <div className="text-3xl sm:text-4xl lg:text-[2.5rem] font-medium">
              <h1>Donation</h1>
            </div>

            <div className="pt-8 lg:pt-[5%]">
              <h1 className="text-xl sm:text-2xl font-medium">Payment</h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-5 w-full">
                <div>
                  <h1 className="text-base font-medium text-[#001712]">
                    Account Name
                  </h1>
                  <h2 className="text-sm font-normal">
                    Ar-Rasheed Mosque, Yaba, Lagos
                  </h2>
                </div>

                <div>
                  <h1 className="text-base font-medium text-[#001712]">
                    Account Number
                  </h1>
                  <h2 className="text-sm font-normal text-[#001712]">
                    0926782561
                  </h2>
                </div>

                <div>
                  <h1 className="text-base font-medium text-[#001712]">
                    Bank Name
                  </h1>
                  <h2 className="text-sm font-normal text-[#001712]">
                    Guarantee Trust Bank (GTB)
                  </h2>
                </div>

                <div>
                  <h1 className="text-base font-medium text-[#001712]">
                    Phone Number
                  </h1>
                  <h2 className="text-sm font-normal text-[#001712]">
                    09085643211, 08156876389
                  </h2>
                </div>

                <div>
                  <h1 className="text-base font-medium text-[#001712]">
                    E-Mail Address
                  </h1>
                  <h2 className="text-sm font-normal text-[#001712] break-words">
                    arrasheed@gmail.com
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 lg:pt-[5%]">
            <h1 className="text-xl sm:text-2xl font-medium">
              Donation Purpose
            </h1>
          </div>

          <div className="bg-white w-full pt-5 sm:pt-10 outline-none focus:border-black valid:border-[#017358]">
            <input
              type="text"
              placeholder="Purpose of Donation"
              className="flex border border-[#9DA39F] rounded-lg px-2 py-3 items-start w-full outline-none"
            />
          </div>

          <div className="flex justify-start pt-8 lg:pt-[5%]">
            <CustomButtons
              handleClick={() => setDonationSteps("payment")}
              text={"Confirm Payment"}
              button_width={"171px"}
            />
          </div>
        </div>
      );

    case "payment":
      return <PaymentInfo setDonationSteps={setDonationSteps} />;

    case "otp":
      return <Otp setDonationSteps={setDonationSteps} />;

    case "confirmation":
      return <Confirmation setDonationSteps={setDonationSteps} />;

    case "success-payment":
      return <SuccessfulPayment />;

    default:
      break;
  }
};

export default Donate;
