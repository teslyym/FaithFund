import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer";
import bmasj from "../../assets/bmasj.png";

const Profile = () => {
  return (
    <>
      <Header />
      <div className="flex gap-[5%] mt-[5%]">
        <div className="w-[30%] flex ">
          <img className="w-[542px]" src={bmasj} alt="" />
        </div>
        <div className="w-[872px]">
          <div className="pt-[10%]">
            <h3 className="">Profile</h3>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
