import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer";
import msjwind from "../../Components/../assets/msjwind.png";

const About = () => {

  document.title = "About"
  return (
    <div>
      <Header />
      <div className="pt-20 flex items-center justify-evenly  w-[87%] mx-auto gap-4 h-[31%] py-3">
        <div className="w-[55%]">
          <h3 className="text-5xl font-semibold">About Ibni Masjid Lillah </h3>
          <h1 className="text-2xl font-medium leading-9 text-[#001712]">
            Ibni Masjid Lillah is a non-profit Islamic organization dedicated to
            restoring and renovating mosques in Nigeria. Through transparent
            initiatives and dedicated efforts, we aim to connect donors with
            mosque restoration projects, creating a positive impact on
            worshipers and communities, ensuring mosques remain centers of
            faith, unity, education, and development.
          </h1>
        </div>
        <div className="w-[43%]">
          <img src={msjwind} className=" w-full" alt="" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
