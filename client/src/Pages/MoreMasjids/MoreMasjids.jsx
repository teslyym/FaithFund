import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";
import CustomButtons from "../../Components/buttons/CustomButtons";
import Masajids from "../../Components/Masajids/Masajids";

const MoreMasjids = () => {
  return (
    <div>
      <div>
        <Header />
        <div className="p-20 pt-[10%]">
          <h3>Masajids (mosques) in need of donations</h3>
          <Masajids />
          {/* <Link className="pt-[10%] flex justify-center">
            <CustomButtons text={"View More Masajid"} button_width={"181px"} />
          </Link> */}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MoreMasjids;
