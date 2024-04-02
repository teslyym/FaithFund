import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="w-[87%] p-20">
        <h1 className="font-semibold text-5xl text-[#001712] py-3">
          Contact Us
        </h1>
        <p className="text-xl font-medium leading-9">
          Our main aim is to restore and renovate all dilapidated masajid
          (mosques) in Nigeria so as to make the worship of Allah easier on
          Nigerian Muslims. To bring our goal into fruition, we need donations
          from everyone who is capable and able to give. Wants to know more
          about us, ask us questions and we will surely answer you Insha Allah.
        </p>
      </div>
      <div className="rounded-lg flex flex-col border w-[462px] mx-auto mb-10 items-center gap-6 shadow-[2px_2px_10px_2px_rgba(0,0,0,0.2)]">
        <div className="text-xl w-full  text-center font-medium pt-4">
          <p>Send us an email to enquire</p>
        </div>
        <div>
          <div className="bg-white w-[382px] pl-4 outline-none focus:border-black valid:border-[#017358]">
            <h1 className="text-left pb-3 text-[#001712] text-sm font-medium">
              Email Address
            </h1>
            <input
              type="email"
              placeholder="Enter Email Address"
              className="flex border border-[#9DA39F] rounded-lg  px-2 py-3 items-center  w-full"
            />
          </div>
          <div className="bg-white w-[382px] pl-4 pt-10 outline-none focus:border-black valid:border-[#017358]">
            <h1 className="text-left pb-3 text-[#001712] text-sm font-medium">
              Message
            </h1>
            <input
              type="email"
              placeholder="Enter Email Address"
              className="flex border border-[#9DA39F] rounded-lg h-32 px-2 py-3 items-start w-full"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button className="items-center text-[#FFFFFF] pt-3 mb-8 rounded-lg bg-[#017358] py-2 px-5 w-[126px]">
            Done
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
