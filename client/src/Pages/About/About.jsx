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
        <div className="w-[45%] ">
          <h3 className="">Our Mission</h3>
          <h1 className="font-normal">
            At Ibni Masjid Lillah, our mission is to empower Islamic communities
            across Nigeria by restoring and revitalizing mosques in need. We are
            dedicated to preserving our cherished heritage and fostering a sense
            of unity and spiritual enlightenment within our communities. Through
            our platform, we strive to connect generous donors with mosque
            restoration projects, creating a positive and lasting impact on the
            lives of worshipers and the broader society.
          </h1>
        </div>

        <div className="w-[50%] gap-6 pt-0">
          <h3 className="">Our Vision</h3>
          <p className="font-normal">
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
      <div className="flex justify-between items-center pt-[10%] p-20 gap-3">
        <div className="w-[50%] gap-6">
          <h3 className="text-5xl font-semibold">Why We Started </h3>
          <h1 className="text-xl font-medium pt-[7%] leading-9 text-[#001712]">
            The idea behind Ibni Masjid Lillah was born out of a deep-rooted
            love for Allah and Islam. We recognized that many masajid (mosques)
            in Nigeria face the challenges of time, neglect, and financial
            constraints, which threaten their ability to continue serving as
            vital centers for worship and education. Our passion for restoring
            these mosques and empowering Islamic communities sparked the
            inception of this platform.
          </h1>
        </div>
        <div className="w-[43%]">
          <img src={mashaf} className=" w-full" alt="" />
        </div>
      </div>

      <div className="w-full">
        <h3 className="items-start pl-[7%]">Our Values</h3>
        <div className="flex justify-center pt-8 gap-16 w-[83%] mx-auto flex-wrap">
          <div className="flex flex-col w-[278px] h-[310px] items-center justify-center">
            <h1>Faith & Dedication</h1>
            <img className="h-[100px] w-[100px]" src={Ramadan} alt="" />
            <h2 className="w-[279px] h-[125px] text-base font-normal">
              We uphold strong faith and dedication to the principles of Islam,
              recognizing the significance of mosques as sacred places of
              worship and spiritual nourishment
            </h2>
          </div>
          <div className="flex flex-col w-[278px] h-[310px] items-center justify-center">
            <h1>Transparency</h1>
            <img className="h-[100px] w-[100px]" src={transparency} alt="" />
            <h2 className="w-[279px] h-[125px] text-base font-normal">
              We value transparency in all our endeavors, ensuring that our
              actions and use of funds are open and accountable to our donors
              and the community.
            </h2>
          </div>
          <div className="flex flex-col w-[278px] h-[310px] items-center justify-center">
            <h1>Compassion & Empathy</h1>
            <img className="h-[100px] w-[100px]" src={heart} alt="" />
            <h2 className="w-[279px] h-[125px] text-base font-normal">
              We approach our mission with compassion and empathy, recognizing
              the needs of others and aiming to uplift those who require
              support.
            </h2>
          </div>
          <div className="flex flex-col w-[278px] h-[310px] items-center justify-center">
            <h1>Excellence</h1>
            <img className="h-[100px] w-[100px]" src={graduation} alt="" />
            <h2 className="w-[279px] h-[125px] text-base font-normal">
              We pursue excellence in all our endeavors, aiming to achieve the
              highest standards in mosque restoration and community support.
            </h2>
          </div>
          <div className="flex flex-col w-[278px] h-[310px] items-center justify-center">
            <h1>Collaboration & Partnership</h1>
            <img className="h-[100px] w-[100px]" src={shake} alt="" />
            <h2 className="w-[279px] h-[125px] text-base font-normal">
              We believe in the power of collaboration and actively seek
              partnerships with like-minded organizations, scholars, and
              community leaders to maximize our impact.
            </h2>
          </div>
          <div className="flex flex-col w-[278px] h-[310px] items-center justify-center">
            <h1>Integrity & Ethics</h1>
            <img className="h-[100px] w-[100px]" src={scale} alt="" />
            <h2 className="w-[279px] h-[125px] text-base font-normal">
              We uphold a strong commitment to integrity, ethical conduct, and
              moral values in all aspects of our organization.
            </h2>
          </div>
          <div className="flex flex-col w-[278px] h-[310px] items-center justify-center">
            <h1>Gratefulness </h1>
            <img className="h-[100px] w-[100px]" src={pray} alt="" />
            <h2 className="w-[279px] h-[125px] text-base font-normal">
              We express gratitude to our donors, partners, and supporters who
              play a vital role in making our mission possible.
            </h2>
          </div>
        </div>
      </div>
      <div className=" pb-[5%]">
        <h3 className="pl-[7%]">Meet Our Members</h3>
        <div className="flex justify-center pt-8 gap-16 w-[83%] mx-auto flex-wrap">
          <div className="flex flex-col w-[300px] h-[390px] items-center justify-center">
            <img src={presi} alt="" />
            <h1 className="text-2xl font-medium text-[#001712]">
              Abdul Mumeen Abdullah
            </h1>
            <h2 className="text-base font-medium text-[#9DA39F]">
              President and Founder
            </h2>
          </div>
          <div className="flex flex-col w-[300px] h-[390px] items-center justify-center">
            <img src={vicepre} alt="" />
            <h1 className="text-2xl font-medium text-[#001712]">
              Umar Hussein
            </h1>
            <h2 className="text-base font-medium text-[#9DA39F]">
              Vice President
            </h2>
          </div>
          <div className="flex flex-col w-[300px] h-[390px] items-center justify-center">
            <img src={boarda} alt="" />
            <h1 className="text-2xl font-medium text-[#001712]">
              Muhammad Khadeejah
            </h1>
            <h2 className="text-base font-medium text-[#9DA39F]">
              Board Member
            </h2>
          </div>
          <div className="flex flex-col w-[300px] h-[390px] items-center justify-center">
            <img src={boardb} alt="" />
            <h1 className="text-2xl font-medium text-[#001712]">
              Bolaji Fatiah
            </h1>
            <h2 className="text-base font-medium text-[#9DA39F]">
              Board Member
            </h2>
          </div>
          <div className="flex flex-col w-[300px] h-[390px] items-center justify-center">
            <img src={boardc} alt="" />
            <h1 className="text-2xl font-medium text-[#001712]">
              Galadinma Yaseer
            </h1>
            <h2 className="text-base font-medium text-[#9DA39F]">
              Board Member
            </h2>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
