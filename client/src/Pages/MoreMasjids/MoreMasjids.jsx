import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer";
import Masajids from "../../Components/Masajids/Masajids";

const MoreMasjids = () => {
  return (
    <div>
      <Header />

      <div className="px-4 sm:px-8 lg:px-20 pt-24 lg:pt-[10%] pb-10">
        <h3 className="text-2xl sm:text-3xl font-semibold mb-6">
          Masajids (mosques) in need of donations
        </h3>

        <Masajids />
      </div>

      <Footer />
    </div>
  );
};

export default MoreMasjids;
