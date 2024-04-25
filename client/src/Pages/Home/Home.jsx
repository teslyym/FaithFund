import React, { useEffect } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer";
import bgimg from "../../assets/bgimg.png";
import { Link } from "react-router-dom";
import sajdah from "../../assets/sajdah.png";
import Masajids from "../../Components/Masajids/Masajids";
import empower from "../../assets/empower.svg";
import CustomButtons from "../../Components/buttons/CustomButtons";
import AddmosqueComponent from "../../Components/AddmosqueComponent";

const Home = () => {
  return (
    <>
      <Header />
      <AddmosqueComponent />
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
            <Link to={"/donate"}>
              <CustomButtons text={"Donate"} button_width={"93px"} />
            </Link>
          </div>
        </div>
        <div className="flex justify-between items-center p-20 gap-3">
          <div className="w-[60%] gap-6">
            <h3>Restore Mosques, Restore Communities: Join the Movement</h3>
            <h1 className="font-normal text-xs leading-6">
              Quran - Surah At-Tawbah (9:18): <br /> "The mosques of Allah are
              only to be maintained by those who believe in Allah and the Last
              Day and establish prayer and give zakah and do not fear except
              Allah, for it is expected that those will be of the [rightly]
              guided."
            </h1>
            <h1 className="font-normal text-xs leading-6">
              Quran - Surah Al-Baqarah (2:114): <br /> "Who is more unjust than
              one who prevents access to the places of worship of Allah, so that
              His name is not mentioned therein, and strives toward their
              destruction? It is not for them to enter them except in fear. For
              them in this world is disgrace, and they will have in the
              Hereafter a great punishment."
            </h1>
            <h1 className="font-normal text-xs leading-6">
              These verses emphasize the importance of maintaining and
              preserving masajid (mosques) as places of worship and spiritual
              nourishment, with promises of great rewards for those who
              contribute to their construction or restoration. Our platform is
              dedicated to restoring mosques and revitalizing communities.
              Together, we can make a lasting impact, nurturing the spirit of
              Islamic communities. Masajid are not just buildings; they are the
              soul of our faith, providing enlightenment, education, and unity.
              Neglect and financial constraints hinder their ability to serve
              communities. Your contribution is a beacon of hope, preserving our
              heritage, reviving traditions, and empowering the faithful.
              Restored masajid become pillars of strength, inspiring
              worshippers, nurturing minds, and fostering unity. They breathe
              new life into communities, promoting social cohesion, and driving
              development through education and charity. Every contribution
              matters. Join our cause, rebuild lives, and restore masajid for a
              powerful legacy of faith, compassion, and unity.
            </h1>
          </div>
          <div className="w-[28%] h-[35%]- rounded-lg mr-[8%] shadow-[10px_10px_5px_0px_rgba(0,0,0,0.23)]">
            <img src={sajdah} alt="" />
          </div>
        </div>
        <div className="p-20 pt-10">
          <h3>Masajids (mosques) in need of donations</h3>
          <Masajids />
          <Link className="pt-[10%] flex justify-center">
            <CustomButtons text={"View More Masajid"} button_width={"181px"} />
          </Link>
        </div>
        <section className="p-5 text-center py-3  w-full h-[22.5rem]">
          <div className="h-[62px]">
            <h3 className="">Nigerian Masajid need your help</h3>
          </div>

          <div className="flex justify-center gap-2.5 font-normal text-sm text-white max-w-[1000px] mx-auto">
            <div className="">
              <p className="rounded-lg font-[1.25rem] leading-[25px]   text-left px-6 py-10 max-w-[260px] bg-[#014D3B]">
                With a generous donation of just a 1000 Naira, you can create a
                profound impact; complete unfinished masajid and breathe new
                life into dilapidated mosques and restore them to their former
                glory.
              </p>
            </div>
            <div>
              <p className="rounded-lg font-[1.25rem] leading-[25px]   text-left px-6 py-10 max-w-[260px] bg-[#014D3B]">
                Based on our research, the current number of uncompleted and
                dilapidated mosques in Nigeria exceeds 200,000, in contrast to
                the over 800,000 mosques across the country. This makes the
                donation important.
              </p>
            </div>
            <div>
              <p className="rounded-lg font-[1.25rem] leading-[25px]   text-left px-6 py-10 max-w-[260px] bg-[#014D3B]">
                Muslims worldwide have the opportunity to contribute to this
                noble cause. The donation is not limited to Nigerians alone; it
                is open to every Muslim who desires to support the cause of
                Allah and be rewarded.
              </p>
            </div>
          </div>
        </section>
        <div className="mx-auto flex rounded opacity-50 px-7 py-3 justify-center font-bold text-8xl">
          <img className="w-[82%] h-[34%] py-2 gap-2" src={empower} alt="" />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
