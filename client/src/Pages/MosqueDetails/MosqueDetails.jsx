import React, { useEffect, useState } from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header/Header";
import buj from "../../assets/buj.svg";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import { Link, useParams } from "react-router-dom";
import CustomButtons from "../../Components/buttons/CustomButtons";
import api from "../../../utils/api";

const MosqueDetails = () => {
  const id = useParams().id;
  const [details, setDetails] = useState();

  const getDetails = async () => {
    const response = await api.get(`/api/mosque/${id}`);
    setDetails(response.data);
    console.log(response);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "FaithFund | Mosque Details";
    getDetails();
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Header />

      <div className="pt-24 lg:pt-[8%] pb-10 px-4 sm:px-8 lg:px-[7vw]">
        <h3 className="w-full max-w-[774px] text-2xl sm:text-3xl lg:text-4xl font-semibold">
          {details && details.name}
        </h3>

        <h1 className="font-normal text-sm sm:text-base pt-5 leading-6 sm:leading-7">
          {details && details.description}
        </h1>
      </div>

      <div>
        <img src={buj} alt="" className="w-full" />
      </div>

      <div className="pt-8 lg:pt-[2%] px-4 sm:px-8 lg:px-[7vw]">
        <h3 className="text-2xl sm:text-3xl font-semibold">
          Current State of the Masjid
        </h3>

        <h1 className="font-normal text-sm sm:text-base pt-4 leading-6 sm:leading-7">
          {details && details.currentState}
        </h1>
      </div>

      <div className="flex gap-4 sm:gap-5 overflow-x-scroll [&::-webkit-scrollbar]:hidden px-4 sm:px-8 lg:px-[7vw] pt-8">
        {[img1, img2, img3, img1, img2, img3, img1, img2, img3].map(
          (img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              className="w-[240px] sm:w-[300px] md:w-[360px] shrink-0 rounded-lg"
            />
          ),
        )}
      </div>

      <div className="pt-12 lg:pt-[8%] px-4 sm:px-8 lg:px-[7vw] flex flex-col lg:flex-row gap-8 lg:gap-10 w-full">
        <div className="w-full lg:w-1/2">
          <h3 className="text-2xl sm:text-3xl font-semibold">
            Transparency and Trust
          </h3>

          <h1 className="font-normal text-sm sm:text-base pt-4 leading-6 sm:leading-7">
            At Ibni Masjidan Lillah, we firmly believe that transparency is the
            cornerstone of building trust with our valued donors. We want to
            assure you that your contributions towards the restoration of
            Ar-Rasheed Mosque are handled with utmost care, accountability, and
            integrity.
          </h1>
        </div>

        <div className="w-full lg:w-1/2">
          <h3 className="text-2xl sm:text-3xl font-semibold">
            Verification Process
          </h3>

          <h1 className="font-normal text-sm sm:text-base pt-4 leading-6 sm:leading-7">
            Restoring a mosque is not just a responsibility; it's a sacred duty.
            Our team works tirelessly to ensure the legitimacy and authenticity
            of the restoration project. We collaborate closely with local
            authorities, esteemed scholars, and renowned experts in Islamic
            architecture to verify every aspect of the restoration plan.
          </h1>
        </div>
      </div>

      <Link className="flex justify-center py-10" to={"/donate"}>
        <CustomButtons text={"Donate now"} button_width={"131px"} />
      </Link>

      <Footer />
    </div>
  );
};

export default MosqueDetails;
