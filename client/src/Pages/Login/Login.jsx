import React, { useState } from "react";
import logo from "../../Components/../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import CustomButtonTwo from "../../Components/buttons/CustomButtonTwo";
import CustomButtons from "../../Components/buttons/CustomButtons";
import api from "../../../utils/api";

const Login = () => {
  const Navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState("false");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading("true");
    try {
      const response = await api.post("api/user/login", { email, password });
      localStorage.setItem("token", response.data.token);
      Navigate("/");
    } catch (error) {
      console.log(error);
      setLoading("false");
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Link to={"/"}>
          <img
            className="w-[74px] h-[64px] sm:w-[94px] sm:h-[80px] ml-4 sm:ml-[10%] mt-6 sm:mt-10"
            src={logo}
            alt=""
          />
        </Link>

        <div className="rounded-lg flex flex-col border w-[92%] sm:w-[70%] md:w-[55%] lg:w-[32%] mx-auto mb-10 items-center gap-6 shadow-[2px_2px_10px_2px_rgba(0,0,0,0.2)] px-4">
          <div className="text-2xl sm:text-[2.125rem] w-full text-center font-medium pt-4">
            <p>Login To Account</p>
          </div>

          {/* Google */}
          <div className="w-full max-w-[249px]">
            <CustomButtonTwo
              icon={
                <svg className="w-6 h-6" viewBox="0 0 25 25">
                  <path
                    d="M22.3055 10.5415H21.5V10.5H12.5V14.5H18.1515C17.327 16.8285 15.1115 18.5 12.5 18.5C9.1865 18.5 6.5 15.8135 6.5 12.5C6.5 9.1865 9.1865 6.5 12.5 6.5C14.0295 6.5 15.421 7.077 16.4805 8.0195L19.309 5.191C17.523 3.5265 15.134 2.5 12.5 2.5C6.9775 2.5 2.5 6.9775 2.5 12.5C2.5 18.0225 6.9775 22.5 12.5 22.5C18.0225 22.5 22.5 18.0225 22.5 12.5C22.5 11.8295 22.431 11.175 22.3055 10.5415Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M3.65308 7.8455L6.93858 10.255C7.82758 8.054 9.98058 6.5 12.5001 6.5C14.0296 6.5 15.4211 7.077 16.4806 8.0195L19.3091 5.191C17.5231 3.5265 15.1341 2.5 12.5001 2.5C8.65908 2.5 5.32808 4.6685 3.65308 7.8455Z"
                    fill="#FF3D00"
                  />
                </svg>
              }
              text={"Get Started with Google"}
            />
          </div>

          {/* Apple */}
          <div className="w-full max-w-[249px]">
            <CustomButtonTwo
              icon={
                <svg width="24" height="25" viewBox="0 0 24 25">
                  <path
                    d="M17.0499 20.78C16.0699 21.73 14.9999 21.58 13.9699 21.13C12.8799 20.67 11.8799 20.65 10.7299 21.13C9.28992 21.75 8.52992 21.57 7.66992 20.78C2.78992 15.75 3.50992 8.09 9.04992 7.81C10.3999 7.88 11.3399 8.55 12.1299 8.61C13.3099 8.37 14.4399 7.68 15.6999 7.77C17.2099 7.89 18.3499 8.49 19.0999 9.57C15.9799 11.44 16.7199 15.55 19.5799 16.7C19.0099 18.2 18.2699 19.69 17.0399 20.79Z"
                    fill="#001712"
                  />
                </svg>
              }
              text={"Get Started with Apple"}
            />
          </div>

          {/* OR */}
          <section className="flex items-center w-full max-w-[250px] gap-2">
            <div className="border w-full"></div>
            <h1 className="text-sm">OR</h1>
            <div className="border w-full"></div>
          </section>

          {/* Inputs */}
          <section className="w-full max-w-[24rem] flex flex-col gap-6">
            <input
              type="email"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded-lg px-2 py-3 w-full"
            />

            <div className="flex border rounded-lg px-2 py-3 items-center">
              <input
                className="w-full outline-none"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
              />
              <svg onClick={toggleShowPassword} className="cursor-pointer">
                <path d="M12 17.5C11.4696 17.5 10.9609 17.2893 10.5858 16.9142..." />
              </svg>
            </div>

            <button type="submit" className="flex justify-center">
              <CustomButtons text={"Login"} button_width={"74px"} />
            </button>
          </section>

          <div className="text-center pb-6">
            Don’t have an account?{" "}
            <span className="text-[#017358]">Register here</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
