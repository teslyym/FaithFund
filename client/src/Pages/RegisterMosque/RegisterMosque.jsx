import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomButtons from "../../Components/buttons/CustomButtons";
import CustomButtonTwo from "../../Components/buttons/CustomButtonTwo";
import logo from "../../Components/../assets/logo.png";
import axios from "axios";

const RegisterMosque = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    image: "",
    description: "",
    currentState: "",
    accountNumber: "",
    accountName: "",
    bankName: "",
  });
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState("false");
  const [showPassword, setShowPassword] = useState(false);
  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading("true");
    try {
      const response = await axios.post(
        "http://localhost:4000/api/mosque/create-mosque",
        formData
      );
      console.log(response);
      setLoading("false");
    } catch (error) {
      console.log(error);
      // setErrors(error.response.data);
      setLoading("false");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      Navigate("/login");
    }
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUser({ ...user, profileImage: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <div>
        <div className="items-start">
          <Link to={"/"}>
            <img
              className="w-[94px] h-[80px] ml-[10%] mt-10"
              src={logo}
              alt=""
            />
          </Link>
        </div>
        <div className="rounded-lg flex flex-col border w-[32%] mx-auto mb-10 items-center gap-6 shadow-[2px_2px_10px_2px_rgba(0,0,0,0.2)]">
          <div className="text-[2.125rem] w-full  text-center font-medium pt-4">
            <p>Register A Mosque</p>
          </div>
          <div>
            {/* <div className="flex w-[249px] h-11 mb-[24px]">
              <div className="items-center justify-center w-full">
                <Link>
                  <CustomButtonTwo
                    icon={
                      <svg
                        className="w-6 h-6"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.3055 10.5415H21.5V10.5H12.5V14.5H18.1515C17.327 16.8285 15.1115 18.5 12.5 18.5C9.1865 18.5 6.5 15.8135 6.5 12.5C6.5 9.1865 9.1865 6.5 12.5 6.5C14.0295 6.5 15.421 7.077 16.4805 8.0195L19.309 5.191C17.523 3.5265 15.134 2.5 12.5 2.5C6.9775 2.5 2.5 6.9775 2.5 12.5C2.5 18.0225 6.9775 22.5 12.5 22.5C18.0225 22.5 22.5 18.0225 22.5 12.5C22.5 11.8295 22.431 11.175 22.3055 10.5415Z"
                          fill="#FFC107"
                        />
                        <path
                          d="M3.65308 7.8455L6.93858 10.255C7.82758 8.054 9.98058 6.5 12.5001 6.5C14.0296 6.5 15.4211 7.077 16.4806 8.0195L19.3091 5.191C17.5231 3.5265 15.1341 2.5 12.5001 2.5C8.65908 2.5 5.32808 4.6685 3.65308 7.8455Z"
                          fill="#FF3D00"
                        />
                        <path
                          d="M12.4999 22.5C15.0829 22.5 17.4299 21.5115 19.2044 19.904L16.1094 17.285C15.0717 18.0742 13.8036 18.501 12.4999 18.5C9.89891 18.5 7.69041 16.8415 6.85841 14.527L3.59741 17.0395C5.25241 20.278 8.61341 22.5 12.4999 22.5Z"
                          fill="#4CAF50"
                        />
                        <path
                          d="M22.3055 10.5415H21.5V10.5H12.5V14.5H18.1515C17.7571 15.6082 17.0467 16.5766 16.108 17.2855L16.1095 17.2845L19.2045 19.9035C18.9855 20.1025 22.5 17.5 22.5 12.5C22.5 11.8295 22.431 11.175 22.3055 10.5415Z"
                          fill="#1976D2"
                        />
                      </svg>
                    }
                    text={"Get Started with Google"}
                  />
                </Link>
              </div>
            </div> */}
            {/* <div className="flex w-[249px] h-11">
              <div className="items-center justify-center w-full">
                <Link>
                  <CustomButtonTwo
                    icon={
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.0499 20.78C16.0699 21.73 14.9999 21.58 13.9699 21.13C12.8799 20.67 11.8799 20.65 10.7299 21.13C9.28992 21.75 8.52992 21.57 7.66992 20.78C2.78992 15.75 3.50992 8.09 9.04992 7.81C10.3999 7.88 11.3399 8.55 12.1299 8.61C13.3099 8.37 14.4399 7.68 15.6999 7.77C17.2099 7.89 18.3499 8.49 19.0999 9.57C15.9799 11.44 16.7199 15.55 19.5799 16.7C19.0099 18.2 18.2699 19.69 17.0399 20.79L17.0499 20.78ZM12.0299 7.75C11.8799 5.52 13.6899 3.68 15.7699 3.5C16.0599 6.08 13.4299 8 12.0299 7.75Z"
                          fill="#001712"
                        />
                      </svg>
                    }
                    text={"Get Started with Apple"}
                  />
                </Link>
              </div>
            </div> */}
          </div>
          {/* <section className="flex items-center w-full max-w-[250px] gap-2">
            <div className="border border-[#9DA39F] w-full"></div>
            <h1 className="text-[14px]">OR</h1>
            <div className="border border-[#9DA39F] w-full"></div>
          </section> */}
          <form
            onSubmit={handleSubmit}
            className="w-[24rem] mb-[10px] flex flex-col gap-8"
          >
            <div className="bg-white w-full pl-4 outline-none focus:border-black valid:border-[#017358]">
              <h1 className="text-left pb-3 text-[#001712] text-sm font-medium">
                Mosque Name
              </h1>
              <input
                type="Enter First Name"
                placeholder="Enter First Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="flex border border-[#9DA39F] rounded-lg  px-2 py-3 items-center  w-full"
              />
            </div>
            <div className="bg-white w-full pl-4 outline-none focus:border-black valid:border-[#017358]">
              <h1 className="text-left pb-3 text-[#001712] text-sm font-medium">
                Mosque Address
              </h1>
              <input
                type="text"
                placeholder="Enter Mosque Address"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                required
                className="flex border border-[#9DA39F] rounded-lg  px-2 py-3 items-center  w-full"
              />
            </div>
            <div className="bg-white w-full pl-4 outline-none focus:border-black valid:border-[#017358]">
              <h1 className="text-left pb-3 text-[#001712] text-sm font-medium">
                Email Address
              </h1>
              <input
                type="email"
                placeholder="Enter Email Address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="flex border border-[#9DA39F] rounded-lg  px-2 py-3 items-center  w-full"
              />
            </div>
            <div className="bg-white w-full pl-4 outline-none focus:border-black valid:border-[#017358]">
              <h1 className="text-left pb-3 text-[#001712] text-sm font-medium">
                Description (precise and accurate)
              </h1>
              <input
                type="text"
                placeholder="Enter Description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                required
                className="flex border border-[#9DA39F] rounded-lg px-2 py-3 items-center  w-full"
              />
            </div>
            <div className="bg-white w-full pl-4 outline-none focus:border-black valid:border-[#017358]">
              <h1 className="text-left pb-3 text-[#001712] text-sm font-medium">
                Account Number
              </h1>
              <input
                type="text"
                placeholder="Enter Account Number"
                value={formData.accountNumber}
                onChange={(e) =>
                  setFormData({ ...formData, accountNumber: e.target.value })
                }
                required
                className="flex border border-[#9DA39F] rounded-lg px-2 py-3 items-center  w-full"
              />
            </div>
            <div className="bg-white w-full pl-4 outline-none focus:border-black valid:border-[#017358]">
              <h1 className="text-left pb-3 text-[#001712] text-sm font-medium">
                Account Name
              </h1>
              <input
                type="text"
                placeholder="Enter Account Name"
                value={formData.accountName}
                onChange={(e) =>
                  setFormData({ ...formData, accountName: e.target.value })
                }
                required
                className="flex border border-[#9DA39F] rounded-lg px-2 py-3 items-center  w-full"
              />
            </div>
            <div className="bg-white w-full pl-4 outline-none focus:border-black valid:border-[#017358]">
              <h1 className="text-left pb-3 text-[#001712] text-sm font-medium">
                Bank Name
              </h1>
              <input
                type="text"
                placeholder="Enter Bank Name"
                value={formData.bankName}
                onChange={(e) =>
                  setFormData({ ...formData, bankName: e.target.value })
                }
                required
                className="flex border border-[#9DA39F] rounded-lg px-2 py-3 items-center  w-full"
              />
            </div>
            <div className="bg-white w-full pl-4 outline-none focus:border-black valid:border-[#017358]">
              <h1 className="text-left pb-3 text-[#001712] text-sm font-medium">
                Current State
              </h1>
              <input
                type="text"
                placeholder="Input Current State"
                value={formData.currentState}
                onChange={(e) =>
                  setFormData({ ...formData, currentState: e.target.value })
                }
                required
                className="flex border border-[#9DA39F] rounded-lg px-2 py-3 items-center  w-full"
              />
            </div>
            <div className="bg-white w-full pl-4 outline-none">
              <h1 className="text-left pb-3 text-[#001712] text-sm font-medium">
                Password (minimum of 8 characters)
              </h1>
              <div className="flex border border-[#9DA39F] rounded-lg px-2 py-3 items-center  w-full justify-between focus-within:border-black valid:border-[#017358]">
                <input
                  className="w-full outline-none"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  required
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
              <div className="pt-5">
                {"Upload Image "}
                <input
                  type="file"
                  onChange={handleImageChange}
                  className="my-2"
                />
                {/* <button
                onClick={deleteProfileImage}
                className={`bg-[#017358] hover:bg-[#017358] text-white font-bold py-1 px-2 rounded ${
                  "opacity-50 cursor-not-allowed" // Only apply opacity if no profileImage
                }`}
                // Explicitly disable if no profileImage
              >
                Delete Image
              </button> */}
              </div>
            </div>
            <div className="flex justify-center">
              {/* <Link to={"login"}> */}

              <button type={"submit"}>
                <CustomButtons
                  text={"Get Started"}
                  button_width={"126px"}
                  disabled={loading}
                />
              </button>
              {/* </Link> */}
            </div>
          </form>
          <p className="bg-[#017358]">{errors && error}</p>
          <div className="w-[22rem] mb-[10px] flex flex-col gap-8 text-base font-normal">
            <h1>
              By continuing, you agree to the{" "}
              <button>
                <span className="text-[#017358]">
                  Terms of Service & Privacy Policy.
                </span>
              </button>
            </h1>
            <h1>
              Already have an account,{" "}
              <span className="text-[#017358]">
                {" "}
                <button>Login</button>
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterMosque;
