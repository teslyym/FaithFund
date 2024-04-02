import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import logo from "../../Components/../assets/logo.png";
import goo from "../../Components/../assets/goo.png";

const Register = () => {
  return (
    <div>
      <div>
        <div className="items-start">
          <img className="w-[94px] h-[80px] ml-[10%] mt-10" src={logo} alt="" />
        </div>
        <div className="rounded-lg flex flex-col border w-[32%] mx-auto mb-10 items-center gap-6 shadow-[2px_2px_10px_2px_rgba(0,0,0,0.2)]">
          <div className="text-[2.125rem] w-full  text-center font-medium pt-4">
            <p>Register An Account</p>
          </div>
          <div>
            <div className="flex w-[249px] h-11 mb-[24px]">
              <div className="flex rounded border border-pry items-center justify-center w-full">
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

                <h1>Get Started with Google</h1>
              </div>
            </div>
            <div className="flex w-[249px] h-11">
              <div className="flex rounded border border-pry items-center justify-center w-full">
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
                <h1>Get Started with Google</h1>
              </div>
            </div>
          </div>
          <section className="flex items-center w-full max-w-[250px] gap-2">
            <div className="border border-[#9DA39F] w-full"></div>
            <h1 className="text-[14px]">OR</h1>
            <div className="border border-[#9DA39F] w-full"></div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Register;
