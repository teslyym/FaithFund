import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer";
import msjwind from "../../Components/../assets/msjwind.png";

const About = () => {
  document.title = "About";
  return (
    <div>
      <Header />
      <div className="flex justify-between items-center pt-[10%] p-20 gap-3">
        <div className="w-[50%] gap-6">
          <h3 className="text-5xl font-semibold">About Ibni Masjid Lillah </h3>
          <h1 className="text-xl font-medium pt-[7%] leading-9 text-[#001712]">
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

      <div className="flex justify-between items-center p-20 pt-3">
        <div className="w-[50%] ">
          <h3>Our Mission</h3>
          <h1>
            At Ibni Masjid Lillah, our mission is to empower Islamic communities
            across Nigeria by restoring and revitalizing mosques in need. We are
            dedicated to preserving our cherished heritage and fostering a sense
            of unity and spiritual enlightenment within our communities. Through
            our platform, we strive to connect generous donors with mosque
            restoration projects, creating a positive and lasting impact on the
            lives of worshipers and the broader society.
          </h1>
        </div>

        <div className="w-[50%] gap-6">
          <h3>Our Vision</h3>
          <p>
            At Ibni Masjid Lillah, we are committed to making a difference. Our
            primary goals include Masajid (Mosques Restoration) as we aim to
            restore dilapidated and uncompleted mosques across Nigeria, making
            them serve the purpose they are meant to serve which is the worship
            of Allah. We also take pride in our commitment to transparency and
            accountability. Every donation is used meticulously for the intended
            restoration projects, and donors receive regular updates on
            progress. We seek to foster collaborations with local organizations,
            scholars, and community leaders to ensure that our efforts align
            with the unique needs of each masjid.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
