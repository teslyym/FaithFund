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
      className="sectiona fixed z-40 w-full bg-white top-0 flex items-center text-[#001712] px-[7vw] py-2 justify-between"
    >
      <Link to={"/"}>
        {" "}
        <img src={logo} className="w-[5vw]" alt="" />
      </Link>
      <div className="flex items-center gap-6">
        <div className="flex gap-6">
          <Link to={"/"} href="" className="hover:underline">
            Home
          </Link>
          <Link to={"About"} href="" className="hover:underline">
            About Us
          </Link>
          <Link to={"/Donate"} href="" className="hover:underline">
            Donate
          </Link>
          <Link to={"/Contact"} href="" className="hover:underline">
            Contact
          </Link>
          <Link to={""} href="">
            {" "}
            <img src={search} alt="" />
          </Link>
        </div>
        <div className=" bg-[#CCE3DE] w-[1px] h-10"></div>
        {decoded ? (
          <div to={"/profile"} className="flex relative items-center gap-6">
            <div
              onClick={toggleDropdown}
              className="flex justify-center items-center gap-4 text-base font-medium"
            >
              <img src={profile} alt="" />
              <h1>{decoded.id.firstname}</h1>
            </div>
            {dropDown && (
              <div>
                <div className="absolute top-[130%] bg-[#017358] rounded border cursor-pointer">
                  <p
                    className=""
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
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-6">
            <Link to={"/register"} href="" className="hover:underline">
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
