import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import bgimg from "../../assets/bgimg.png";
import { Link } from "react-router-dom";
import sajdah from "../../assets/sajdah.png";
import sajdahh from "../../assets/sajdahh.png"

const Home = () => {
  return (
    <>
      <Header />
      <div>
        <div className="relative">
          <img className="w-full" src={bgimg} alt="bgimg" />
          <div className="absolute flex flex-col gap-4 items-center backdrop-blur-lg bottom-[10%] border border-[rgba(255,255,255,0.3)] right-0 p-10 mr-[6%] rounded-[24px] w-[51%] ">
            <p className="font-bold text-[3rem]">
              Help Restore Dilapidated Mosques
            </p>
            <h1 className=" text-[1rem]">
              The Prophet (PBUH) said: “Whoever builds a masjid for the sake of
              Allah, Allah will build for him a house in Paradise.”
            </h1>
            <Link className="rounded px-2 py-3 border-inherit border-[1px] bg-[#017358] text-[white]"> Donate</Link>
          </div>
        </div>
        <div className="flex justify-between items-center p-20 gap-3">
          <div className="w-[60%] gap-6">
            <p className="font-medium text-[2rem]">Restore Mosques, Restore Communities: Join the Movement</p>
            <h1 className="font-normal text-xs leading-6">Quran - Surah At-Tawbah (9:18): <br /> "The mosques of Allah are only to be maintained by those who believe in Allah and the Last Day and establish prayer and give zakah and do not fear except Allah, for it is expected that those will be of the [rightly] guided."</h1>
            <h1 className="font-normal text-xs leading-6">Quran - Surah Al-Baqarah (2:114): <br /> "Who is more unjust than one who prevents access to the places of worship of Allah, so that His name is not mentioned therein, and strives toward their destruction? It is not for them to enter them except in fear. For them in this world is disgrace, and they will have in the Hereafter a great punishment."</h1>
            <h1 className="font-normal text-xs leading-6">These verses emphasize the importance of maintaining and preserving masajid (mosques) as places of worship and spiritual nourishment, with promises of great rewards for those who contribute to their construction or restoration. Our platform is dedicated to restoring mosques and revitalizing communities. Together, we can make a lasting impact, nurturing the spirit of Islamic communities. Masajid are not just buildings; they are the soul of our faith, providing enlightenment, education, and unity. Neglect and financial constraints hinder their ability to serve communities. Your contribution is a beacon of hope, preserving our heritage, reviving traditions, and empowering the faithful. Restored masajid become pillars of strength, inspiring worshippers, nurturing minds, and fostering unity. They breathe new life into communities, promoting social cohesion, and driving development through education and charity. Every contribution matters. Join our cause, rebuild lives, and restore masajid for a powerful legacy of faith, compassion, and unity.</h1>

          </div>
          <div className="w-[28%] h-[35%]- rounded-lg mr-[8%]">
              <img src={sajdah} alt="" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
