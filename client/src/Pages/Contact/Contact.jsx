import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer";
import FaqComponent from "../../Components/FaqComponent";
import { qa } from "../../data";
import { Link } from "react-router-dom";
import CustomButtons from "../../Components/buttons/CustomButtons";

const Contact = () => {
  return (
    <>
      <Header />

      <div className="w-full lg:w-[87%] px-4 sm:px-8 lg:p-20 pt-24 lg:pt-20">
        <h1 className="font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#001712] py-3">
          Contact Us
        </h1>

        <p className="text-base sm:text-lg lg:text-xl font-medium leading-7 lg:leading-9">
          Our main aim is to restore and renovate all dilapidated masajid
          (mosques) in Nigeria so as to make the worship of Allah easier on
          Nigerian Muslims. To bring our goal into fruition, we need donations
          from everyone who is capable and able to give. Wants to know more
          about us, ask us questions and we will surely answer you Insha Allah.
        </p>
      </div>

      <div className="rounded-lg flex flex-col border w-[92%] max-w-[462px] mx-auto mb-10 items-center gap-6 shadow-[2px_2px_10px_2px_rgba(0,0,0,0.2)] px-4">
        <div className="text-lg sm:text-xl w-full text-center font-medium pt-4">
          <p>Send us an email to enquire</p>
        </div>

        <div className="w-full">
          <div className="bg-white w-full outline-none focus:border-black valid:border-[#017358]">
            <h1 className="text-left pb-3 text-[#001712] text-sm font-medium">
              Email Address
            </h1>
            <input
              type="email"
              placeholder="Enter Email Address"
              className="flex border border-[#9DA39F] rounded-lg px-2 py-3 items-center w-full outline-none"
            />
          </div>

          <div className="bg-white w-full pt-6 sm:pt-10 outline-none focus:border-black valid:border-[#017358]">
            <h1 className="text-left pb-3 text-[#001712] text-sm font-medium">
              Message
            </h1>
            <input
              type="text"
              placeholder="Enter Message"
              className="flex border border-[#9DA39F] rounded-lg h-32 px-2 py-3 items-start w-full outline-none"
            />
          </div>
        </div>

        <div className="flex justify-center pb-6">
          <Link>
            <CustomButtons text={"Done"} button_width={"126px"} />
          </Link>
        </div>
      </div>

      <div className="w-full px-4 sm:px-8 lg:w-[84%] mx-auto pb-8">
        <h3 className="text-2xl sm:text-3xl font-semibold">
          Some of the frequently asked questions (FAQs)
        </h3>

        <div className="flex justify-center pt-8 gap-6 lg:gap-16 w-full mx-auto flex-wrap">
          {qa.map((qst, index) => (
            <FaqComponent
              key={index}
              question={qst.question}
              answer={qst.answer}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
