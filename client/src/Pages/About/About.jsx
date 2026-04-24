import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer";
import msjwind from "../../Components/../assets/msjwind.png";
import mashaf from "../../Components/../assets/mashaf.png";
import Ramadan from "../../Components/../assets/Ramadan.png";
import transparency from "../../Components/../assets/opacity.png";
import heart from "../../Components/../assets/heart.png";
import graduation from "../../Components/../assets/graduation.png";
import shake from "../../Components/../assets/shake.png";
import scale from "../../Components/../assets/Scales.png";
import pray from "../../Components/../assets/Pray.png";
import presi from "../../Components/../assets/presi.png";
import vicepre from "../../Components/../assets/vicepre.png";
import boarda from "../../Components/../assets/boarda.png";
import boardb from "../../Components/../assets/boardb.png";
import boardc from "../../Components/../assets/boardc.png";

const About = () => {
  document.title = "About";

  return (
    <div>
      <Header />

      <div className="flex flex-col lg:flex-row justify-between items-center pt-24 lg:pt-[10%] px-4 sm:px-8 lg:p-20 gap-8">
        <div className="w-full lg:w-[50%]">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
            About Ibni Masjid Lillah
          </h3>
          <h1 className="text-base sm:text-lg lg:text-xl font-medium pt-6 lg:pt-[7%] leading-7 lg:leading-9 text-[#001712]">
            Ibni Masjid Lillah is a non-profit Islamic organization dedicated to
            restoring and renovating mosques in Nigeria. Through transparent
            initiatives and dedicated efforts, we aim to connect donors with
            mosque restoration projects, creating a positive impact on
            worshipers and communities, ensuring mosques remain centers of
            faith, unity, education, and development.
          </h1>
        </div>

        <div className="w-full lg:w-[43%]">
          <img src={msjwind} className="w-full" alt="" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-start px-4 sm:px-8 lg:p-20 pt-8 gap-8">
        <div className="w-full lg:w-[45%]">
          <h3 className="text-2xl sm:text-3xl font-semibold">Our Mission</h3>
          <h1 className="font-normal text-base sm:text-lg leading-7 pt-3">
            At Ibni Masjid Lillah, our mission is to empower Islamic communities
            across Nigeria by restoring and revitalizing mosques in need. We are
            dedicated to preserving our cherished heritage and fostering a sense
            of unity and spiritual enlightenment within our communities.
          </h1>
        </div>

        <div className="w-full lg:w-[50%]">
          <h3 className="text-2xl sm:text-3xl font-semibold">Our Vision</h3>
          <p className="font-normal text-base sm:text-lg leading-7 pt-3">
            At Ibni Masjid Lillah, we are committed to making a difference. Our
            primary goals include Masajid restoration, transparency,
            accountability, and collaboration with local organizations,
            scholars, and community leaders.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center pt-12 lg:pt-[10%] px-4 sm:px-8 lg:p-20 gap-8">
        <div className="w-full lg:w-[50%]">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
            Why We Started
          </h3>
          <h1 className="text-base sm:text-lg lg:text-xl font-medium pt-6 lg:pt-[7%] leading-7 lg:leading-9 text-[#001712]">
            The idea behind Ibni Masjid Lillah was born out of a deep-rooted
            love for Allah and Islam. We recognized that many masajid in Nigeria
            face challenges of time, neglect, and financial constraints.
          </h1>
        </div>

        <div className="w-full lg:w-[43%]">
          <img src={mashaf} className="w-full" alt="" />
        </div>
      </div>

      <div className="w-full px-4 sm:px-8 lg:px-[7%]">
        <h3 className="text-2xl sm:text-3xl font-semibold">Our Values</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pt-8">
          {[
            ["Faith & Dedication", Ramadan],
            ["Transparency", transparency],
            ["Compassion & Empathy", heart],
            ["Excellence", graduation],
            ["Collaboration & Partnership", shake],
            ["Integrity & Ethics", scale],
            ["Gratefulness", pray],
          ].map(([title, img], index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center justify-start min-h-[280px]"
            >
              <h1 className="font-semibold text-lg">{title}</h1>
              <img className="h-[90px] w-[90px] my-4" src={img} alt="" />
              <h2 className="text-base font-normal leading-6">
                We uphold values that guide our mission, strengthen our work,
                and help us serve communities with sincerity and accountability.
              </h2>
            </div>
          ))}
        </div>
      </div>

      <div className="pb-[5%] px-4 sm:px-8 lg:px-[7%] pt-12">
        <h3 className="text-2xl sm:text-3xl font-semibold">Meet Our Members</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
          {[
            [presi, "Abdul Mumeen Abdullah", "President and Founder"],
            [vicepre, "Umar Hussein", "Vice President"],
            [boarda, "Muhammad Khadeejah", "Board Member"],
            [boardb, "Bolaji Fatiah", "Board Member"],
            [boardc, "Galadinma Yaseer", "Board Member"],
          ].map(([img, name, role], index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center"
            >
              <img src={img} alt="" className="w-full max-w-[300px]" />
              <h1 className="text-xl sm:text-2xl font-medium text-[#001712] mt-3">
                {name}
              </h1>
              <h2 className="text-base font-medium text-[#9DA39F]">{role}</h2>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
