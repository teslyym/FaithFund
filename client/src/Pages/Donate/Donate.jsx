import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";
import CustomButtons from "../../Components/buttons/CustomButtons";
import PaymentInfo from "../../Components/PaymentInfo";
import Otp from "../../Components/Otp";

const Donate = () => {
  const [donationSteps, setDonationSteps] = useState("donate");

  switch (donationSteps) {
    case "donate":
      return (
        <div className="rounded-lg p-10  pt-[10%] border w-[924px] mx-auto mb-10 items-center shadow-[2px_2px_10px_2px_rgba(0,0,0,0.2)]">
          <div className="">
            <div className="text-[2.5rem] w-[175px]  font-medium">
              <h1>Donation</h1>
            </div>
            <div className="pt-[5%]">
              <h1 className="text-2xl font-medium">Payment</h1>
              <div className="flex pt-5  justify-start gap-6 w-[844px] h-[209px] mx-auto flex-wrap">
                <div className="w-[264px] h-[54px] gap-2">
                  <h1 className="text-base font-medium text-[#001712]">
                    Account Name
                  </h1>
                  <h2 className="text-sm font-normal">
                    Ar-Rasheed Mosque, Yaba, Lagos
                  </h2>
                </div>
                <div className="w-[264px] h-[54px] gap-2">
                  <h1 className="text-base font-medium text-[#001712]">
                    Account Number
                  </h1>
                  <h2 className="text-sm font-normal text-[#001712]">
                    0926782561{" "}
                  </h2>
                </div>
                <div className="w-[264px] h-[54px] gap-2">
                  <h1 className="text-base font-medium text-[#001712]">
                    Bank Name
                  </h1>
                  <h2 className="text-sm font-normal text-[#001712]">
                    Guarantee Trust Bank (GTB)
                  </h2>
                </div>
                <div className="w-[264px] h-[54px] gap-2">
                  <h1 className="text-base font-medium text-[#001712]">
                    Phone Number
                  </h1>
                  <h2 className="text-sm font-normal text-[#001712]">
                    09085643211, 08156876389
                  </h2>
                </div>
                <div className="w-[264px] h-[54px] gap-2">
                  <h1 className="text-base font-medium text-[#001712]">
                    E-Mail Address
                  </h1>
                  <h2 className="text-sm font-normal text-[#001712]">
                    arrasheed@gmail.com
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-[5%]">
            <h1 className="text-2xl font-medium">Donation Purpose</h1>
          </div>
          <div className="bg-white w-[382px] pl-4 pt-10 outline-none focus:border-black valid:border-[#017358]">
            <input
              type="text"
              placeholder="Purpose of Donation"
              className="flex border border-[#9DA39F] rounded-lg h-[16%] px-2 py-3 items-start w-[839px]"
            />
          </div>
          <div className="flex justify-start pt-[5%]">
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
      return <Otp />;
    default:
      break;
  }

  // return (
  //   <div>
  //     <Header />

  //     <Footer />
  //   </div>
  // );
};

export default Donate;
