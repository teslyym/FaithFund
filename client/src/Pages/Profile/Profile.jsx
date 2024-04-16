import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer";
import bmasj from "../../assets/bmasj.png";
import pencil from "../../assets/pencil.svg";
import { Link } from "react-router-dom";
import CustomButtons from "../../Components/buttons/CustomButtons";

const Profile = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <Header />
      <div className="flex gap-[5%] mt-[5%] ml-10">
        <div className="w-[30%] flex ">
          <img className="w-[542px]" src={bmasj} alt="" />
        </div>
        <div className=" flex flex-col w-[872px]">
          <div className="pt-[10%]">
            <h3 className="">Profile</h3>
          </div>

          <div className="w-[671px] pt-10 rounded-lg border shadow-[2px_2px_10px_2px_rgba(0,0,0,0.2)]">
            <div className="flex justify-between ml-5 mr-5 ">
              <h1>Account Details</h1>
              <img src={pencil} alt="" />
            </div>
            <div className="h-[0.5px] w-full bg-[#9DA39F] mt-5"></div>
            <div className="pt-10 pl-8 w-[243px] pb-5">
              <h1 className="text-base font-normal w-[205px]">
                Name: Teslim Salahudeen
              </h1>
              <h2 className="text-base font-normal w-[243px]">
                Email: steslimolayiwola@gmail.com
              </h2>
            </div>
          </div>

          <div className="w-[671px] pt-[5%] gap-[5%] rounded-lg border shadow-[2px_2px_10px_2px_rgba(0,0,0,0.2)]">
            <div className="flex justify-between ml-5 mr-5 w-[186px] ">
              <h1>PHONE NUMBERS</h1>
              <img src={pencil} alt="" />
            </div>
            <div className="h-[0.5px] w-[266px] bg-[#9DA39F] mt-5"></div>
            <div className="w-[101px] pt-10 pl-8  pb-5">
              <h1 className="text-base font-normal">09080520324</h1>
              <h2 className="text-base font-normal">08158985264</h2>
            </div>
          </div>
          <div className="w-[872px] pt-[5%]  gap-[5%] rounded-lg border shadow-[2px_2px_10px_2px_rgba(0,0,0,0.2)]">
            <h1 className="pt-[3%] pl-8">Change password</h1>
            <div className="h-[0.5px] w-full bg-[#9DA39F] mt-5"></div>

            <div className="flex flex-wrap pb-[5%] pt-[3%]">
              <div className="bg-white w-[376px] pl-4 outline-none">
                <h1 className="text-left pb-3 text-[#001712] text-sm font-medium">
                  Old Password
                </h1>
                <div className="flex border border-[#9DA39F] rounded-lg px-2 py-3 items-center  w-full justify-between focus-within:border-black valid:border-[#017358]">
                  <input
                    className="w-full outline-none"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Old Password"
                  />
                  <svg
                    onClick={toggleShowPassword}
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 17.5C11.4696 17.5 10.9609 17.2893 10.5858 16.9142C10.2107 16.5391 10 16.0304 10 15.5C10 14.39 10.89 13.5 12 13.5C12.5304 13.5 13.0391 13.7107 13.4142 14.0858C13.7893 14.4609 14 14.9696 14 15.5C14 16.0304 13.7893 16.5391 13.4142 16.9142C13.0391 17.2893 12.5304 17.5 12 17.5ZM18 20.5V10.5H6V20.5H18ZM18 8.5C18.5304 8.5 19.0391 8.71071 19.4142 9.08579C19.7893 9.46086 20 9.96957 20 10.5V20.5C20 21.0304 19.7893 21.5391 19.4142 21.9142C19.0391 22.2893 18.5304 22.5 18 22.5H6C5.46957 22.5 4.96086 22.2893 4.58579 21.9142C4.21071 21.5391 4 21.0304 4 20.5V10.5C4 9.39 4.89 8.5 6 8.5H7V6.5C7 5.17392 7.52678 3.90215 8.46447 2.96447C9.40215 2.02678 10.6739 1.5 12 1.5C12.6566 1.5 13.3068 1.62933 13.9134 1.8806C14.52 2.13188 15.0712 2.50017 15.5355 2.96447C15.9998 3.42876 16.3681 3.97995 16.6194 4.58658C16.8707 5.19321 17 5.84339 17 6.5V8.5H18ZM12 3.5C11.2044 3.5 10.4413 3.81607 9.87868 4.37868C9.31607 4.94129 9 5.70435 9 6.5V8.5H15V6.5C15 5.70435 14.6839 4.94129 14.1213 4.37868C13.5587 3.81607 12.7956 3.5 12 3.5Z"
                      fill="#9DA39F"
                    />
                  </svg>
                </div>
              </div>
              <div className="bg-white w-[376px] pl-4 outline-none">
                <h1 className="text-left pb-3 text-[#001712] text-sm font-medium">
                  New Password (minimum of 8 characters)
                </h1>
                <div className="flex border border-[#9DA39F] rounded-lg px-2 py-3 items-center  w-full justify-between focus-within:border-black valid:border-[#017358]">
                  <input
                    className="w-full outline-none"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter New Password"
                  />
                  <svg
                    onClick={toggleShowPassword}
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 17.5C11.4696 17.5 10.9609 17.2893 10.5858 16.9142C10.2107 16.5391 10 16.0304 10 15.5C10 14.39 10.89 13.5 12 13.5C12.5304 13.5 13.0391 13.7107 13.4142 14.0858C13.7893 14.4609 14 14.9696 14 15.5C14 16.0304 13.7893 16.5391 13.4142 16.9142C13.0391 17.2893 12.5304 17.5 12 17.5ZM18 20.5V10.5H6V20.5H18ZM18 8.5C18.5304 8.5 19.0391 8.71071 19.4142 9.08579C19.7893 9.46086 20 9.96957 20 10.5V20.5C20 21.0304 19.7893 21.5391 19.4142 21.9142C19.0391 22.2893 18.5304 22.5 18 22.5H6C5.46957 22.5 4.96086 22.2893 4.58579 21.9142C4.21071 21.5391 4 21.0304 4 20.5V10.5C4 9.39 4.89 8.5 6 8.5H7V6.5C7 5.17392 7.52678 3.90215 8.46447 2.96447C9.40215 2.02678 10.6739 1.5 12 1.5C12.6566 1.5 13.3068 1.62933 13.9134 1.8806C14.52 2.13188 15.0712 2.50017 15.5355 2.96447C15.9998 3.42876 16.3681 3.97995 16.6194 4.58658C16.8707 5.19321 17 5.84339 17 6.5V8.5H18ZM12 3.5C11.2044 3.5 10.4413 3.81607 9.87868 4.37868C9.31607 4.94129 9 5.70435 9 6.5V8.5H15V6.5C15 5.70435 14.6839 4.94129 14.1213 4.37868C13.5587 3.81607 12.7956 3.5 12 3.5Z"
                      fill="#9DA39F"
                    />
                  </svg>
                </div>
                <p className="pt-2 text-[0.875rem]">
                  (Use alphabets, numbers and characters)
                </p>
              </div>
              <div className="bg-white w-[376px] pl-4 outline-none">
                <h1 className="text-left pb-3 text-[#001712] text-sm font-medium">
                  COnfirm Password
                </h1>
                <div className="flex border border-[#9DA39F] rounded-lg px-2 py-3 items-center  w-full justify-between focus-within:border-black valid:border-[#017358]">
                  <input
                    className="w-full outline-none"
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm New Password"
                  />
                  <svg
                    onClick={toggleShowPassword}
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 17.5C11.4696 17.5 10.9609 17.2893 10.5858 16.9142C10.2107 16.5391 10 16.0304 10 15.5C10 14.39 10.89 13.5 12 13.5C12.5304 13.5 13.0391 13.7107 13.4142 14.0858C13.7893 14.4609 14 14.9696 14 15.5C14 16.0304 13.7893 16.5391 13.4142 16.9142C13.0391 17.2893 12.5304 17.5 12 17.5ZM18 20.5V10.5H6V20.5H18ZM18 8.5C18.5304 8.5 19.0391 8.71071 19.4142 9.08579C19.7893 9.46086 20 9.96957 20 10.5V20.5C20 21.0304 19.7893 21.5391 19.4142 21.9142C19.0391 22.2893 18.5304 22.5 18 22.5H6C5.46957 22.5 4.96086 22.2893 4.58579 21.9142C4.21071 21.5391 4 21.0304 4 20.5V10.5C4 9.39 4.89 8.5 6 8.5H7V6.5C7 5.17392 7.52678 3.90215 8.46447 2.96447C9.40215 2.02678 10.6739 1.5 12 1.5C12.6566 1.5 13.3068 1.62933 13.9134 1.8806C14.52 2.13188 15.0712 2.50017 15.5355 2.96447C15.9998 3.42876 16.3681 3.97995 16.6194 4.58658C16.8707 5.19321 17 5.84339 17 6.5V8.5H18ZM12 3.5C11.2044 3.5 10.4413 3.81607 9.87868 4.37868C9.31607 4.94129 9 5.70435 9 6.5V8.5H15V6.5C15 5.70435 14.6839 4.94129 14.1213 4.37868C13.5587 3.81607 12.7956 3.5 12 3.5Z"
                      fill="#9DA39F"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg flex flex-col border w-[462px] mx-auto mb-10r gap-6 shadow-[2px_2px_10px_2px_rgba(0,0,0,0.2)]">
            <div className="text-xl w-full  text-center font-medium pt-4">
              <p>Send us an email to enquire</p>
            </div>
            <div>
              <div className="bg-white w-[382px] pl-4 outline-none focus:border-black valid:border-[#017358]">
                <h1 className="text-left pb-3 text-[#001712] text-sm font-medium">
                  Email Address
                </h1>
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="flex border border-[#9DA39F] rounded-lg  px-2 py-3 items-center  w-full"
                />
              </div>
              <div className="bg-white w-[382px] pl-4 pt-10 outline-none focus:border-black valid:border-[#017358]">
                <h1 className="text-left pb-3 text-[#001712] text-sm font-medium">
                  Message
                </h1>
                <input
                  type="email"
                  placeholder="Enter Message"
                  className="flex border border-[#9DA39F] rounded-lg h-32 px-2 py-3 items-start w-full"
                />
              </div>
            </div>
            <div className="flex justify-center pb-[5%]">
              <Link>
                <CustomButtons text={"Done"} button_width={"126px"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
