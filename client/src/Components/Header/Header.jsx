import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import CustomButtons from "../buttons/CustomButtons";
import profile from "../../assets/profile.svg";
import { jwtDecode } from "jwt-decode";
// import jwt from 'jsonwebtoken';

const Header = () => {
  const [dropDown, setDropDown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [decoded, setDecoded] = useState(false);
  const Navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setDecoded(jwtDecode(token));
    }
  }, []);

  console.log(decoded);

  const toggleDropdown = () => {
    setDropDown(!dropDown);
  };

  const logout = () => {
    localStorage.removeItem("token");
    Navigate("/");
  };

  return (
    <div
      id="header"
      className="sectiona fixed z-40 w-full bg-white top-0 flex items-center text-[#001712] px-4 sm:px-8 lg:px-[7vw] py-2 justify-between"
    >
      <Link to={"/"}>
        <img src={logo} className="w-14 sm:w-16 md:w-[5vw]" alt="" />
      </Link>

      <button
        onClick={() => setMobileMenu(!mobileMenu)}
        className="md:hidden text-3xl font-bold"
      >
        ☰
      </button>

      <div
        className={`${
          mobileMenu ? "flex" : "hidden"
        } md:flex absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent flex-col md:flex-row items-start md:items-center gap-6 px-6 md:px-0 py-5 md:py-0 shadow-md md:shadow-none`}
      >
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          <Link to={"/"} className="hover:underline">
            Home
          </Link>
          <Link to={"About"} className="hover:underline">
            About Us
          </Link>
          <Link to={"/Donate"} className="hover:underline">
            Donate
          </Link>
          <Link to={"/Contact"} className="hover:underline">
            Contact
          </Link>
          <Link to={""}>
            <img src={search} alt="" className="w-5" />
          </Link>
        </div>

        <div className="hidden md:block bg-[#CCE3DE] w-[1px] h-10"></div>

        {decoded ? (
          <div className="flex relative items-center gap-6">
            <div
              onClick={toggleDropdown}
              className="flex justify-center items-center gap-4 text-base font-medium cursor-pointer"
            >
              <img src={profile} alt="" />
              <h1>{decoded.id.firstname}</h1>
            </div>

            {dropDown && (
              <div className="absolute top-[130%] bg-[#017358] text-white rounded border cursor-pointer px-4 py-2 space-y-2">
                <p
                  onClick={() => {
                    toggleDropdown();
                    Navigate("/profile");
                  }}
                  className="hover:underline"
                >
                  Profile
                </p>
                <p onClick={logout} className="hover:underline">
                  Logout
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
            <Link to={"/register"} className="hover:underline">
              Register
            </Link>
            <Link to={"/Login"}>
              <CustomButtons text="Login" button_width={"100px"} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
