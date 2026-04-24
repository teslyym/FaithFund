import React from "react";
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
        <div className="relative pt-16 md:pt-0">
          <img
            className="w-full min-h-[520px] object-cover"
            src={bgimg}
            alt="bgimg"
          />

          <div className="absolute flex flex-col gap-4 items-center backdrop-blur-lg bottom-6 md:bottom-[10%] left-4 right-4 md:left-auto md:right-0 md:mr-[6%] border border-[rgba(255,255,255,0.3)] p-5 sm:p-8 lg:p-10 rounded-[24px] w-auto md:w-[60%] lg:w-[51%] text-center md:text-left">
            <p className="font-bold text-2xl sm:text-4xl lg:text-[3rem] leading-tight">
              Help Restore Dilapidated Mosques
            </p>

            <h1 className="text-sm sm:text-base">
              The Prophet (PBUH) said: “Whoever builds a masjid for the sake of
              Allah, Allah will build for him a house in Paradise.”
            </h1>

            <Link to={"/donate"}>
              <CustomButtons text={"Donate"} button_width={"93px"} />
            </Link>
          </div>
        </div>

        <div className="flex justify-between items-center flex-col lg:flex-row px-4 sm:px-8 lg:p-20 py-12 gap-8">
          <div className="w-full lg:w-[60%]">
            <h3 className="text-2xl sm:text-3xl font-semibold">
              Restore Mosques, Restore Communities: Join the Movement
            </h3>

            <h1 className="font-normal text-sm sm:text-base leading-7 pt-4">
              Quran - Surah At-Tawbah (9:18): <br /> "The mosques of Allah are
              only to be maintained by those who believe in Allah and the Last
              Day and establish prayer and give zakah and do not fear except
              Allah, for it is expected that those will be of the [rightly]
              guided."
            </h1>

            <h1 className="font-normal text-sm sm:text-base leading-7 pt-4">
              Quran - Surah Al-Baqarah (2:114): <br /> "Who is more unjust than
              one who prevents access to the places of worship of Allah, so that
              His name is not mentioned therein, and strives toward their
              destruction? It is not for them to enter them except in fear. For
              them in this world is disgrace, and they will have in the
              Hereafter a great punishment."
            </h1>

            <h1 className="font-normal text-sm sm:text-base leading-7 pt-4">
              These verses emphasize the importance of maintaining and
              preserving masajid (mosques) as places of worship and spiritual
              nourishment, with promises of great rewards for those who
              contribute to their construction or restoration. Our platform is
              dedicated to restoring mosques and revitalizing communities.
              Together, we can make a lasting impact, nurturing the spirit of
              Islamic communities.
            </h1>
          </div>

          <div className="w-full sm:w-[70%] lg:w-[28%] rounded-lg lg:mr-[8%] shadow-[10px_10px_5px_0px_rgba(0,0,0,0.23)]">
            <img src={sajdah} alt="" className="w-full rounded-lg" />
          </div>
        </div>

        <div className="px-4 sm:px-8 lg:p-20 pt-10">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-8">
            Masajids (mosques) in need of donations
          </h3>

          <Masajids page={"home"} />

          <Link to={"/MoreMasjids"} className="pt-10 flex justify-center">
            <CustomButtons text={"View More Masajid"} button_width={"181px"} />
          </Link>
        </div>

        <section className="px-4 sm:px-8 lg:p-5 text-center py-10 w-full">
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold">
              Nigerian Masajid need your help
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 font-normal text-sm text-white max-w-[1000px] mx-auto pt-8">
            <p className="rounded-lg leading-[25px] text-left px-6 py-8 bg-[#014D3B]">
              With a generous donation of just a 1000 Naira, you can create a
              profound impact; complete unfinished masajid and breathe new life
              into dilapidated mosques and restore them to their former glory.
            </p>

            <p className="rounded-lg leading-[25px] text-left px-6 py-8 bg-[#014D3B]">
              Based on our research, the current number of uncompleted and
              dilapidated mosques in Nigeria exceeds 200,000, in contrast to the
              over 800,000 mosques across the country. This makes the donation
              important.
            </p>

            <p className="rounded-lg leading-[25px] text-left px-6 py-8 bg-[#014D3B]">
              Muslims worldwide have the opportunity to contribute to this noble
              cause. The donation is not limited to Nigerians alone; it is open
              to every Muslim who desires to support the cause of Allah and be
              rewarded.
            </p>
          </div>
        </section>

        <div className="mx-auto flex rounded opacity-50 px-4 sm:px-7 py-3 justify-center">
          <img className="w-full sm:w-[82%] py-2" src={empower} alt="" />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
