import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer";
import iml from "../../assets/iml.svg";
import { Link } from "react-router-dom";
import CustomButtons from "../../Components/buttons/CustomButtons";

const ErrorPage = () => {
  return (
    <div>
      <Header />
      <div className="pt-[10%] py-3 px-3 ml-8">
        <div>
          <h3>404 Error page</h3>
        </div>
        <div className=" flex justify-center pt-[5%]">
          <img src={iml} alt="" />
        </div>
        <div className="flex justify-center items-center gap-6">
          <svg
            width="54"
            height="54"
            viewBox="0 0 54 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.9987 40.3333C27.7543 40.3333 28.388 40.0773 28.9 39.5653C29.4103 39.0551 29.6654 38.4222 29.6654 37.6667C29.6654 36.9111 29.4103 36.2773 28.9 35.7653C28.388 35.2551 27.7543 35 26.9987 35C26.2431 35 25.6103 35.2551 25.1 35.7653C24.588 36.2773 24.332 36.9111 24.332 37.6667C24.332 38.4222 24.588 39.0551 25.1 39.5653C25.6103 40.0773 26.2431 40.3333 26.9987 40.3333ZM24.332 29.6667H29.6654V13.6667H24.332V29.6667ZM26.9987 53.6667C23.3098 53.6667 19.8431 52.9662 16.5987 51.5653C13.3543 50.1662 10.532 48.2667 8.13203 45.8667C5.73203 43.4667 3.83248 40.6444 2.43336 37.4C1.03248 34.1555 0.332031 30.6889 0.332031 27C0.332031 23.3111 1.03248 19.8444 2.43336 16.6C3.83248 13.3556 5.73203 10.5333 8.13203 8.13333C10.532 5.73333 13.3543 3.83288 16.5987 2.43199C19.8431 1.03288 23.3098 0.333328 26.9987 0.333328C30.6876 0.333328 34.1543 1.03288 37.3987 2.43199C40.6431 3.83288 43.4654 5.73333 45.8654 8.13333C48.2654 10.5333 50.1649 13.3556 51.564 16.6C52.9649 19.8444 53.6654 23.3111 53.6654 27C53.6654 30.6889 52.9649 34.1555 51.564 37.4C50.1649 40.6444 48.2654 43.4667 45.8654 45.8667C43.4654 48.2667 40.6431 50.1662 37.3987 51.5653C34.1543 52.9662 30.6876 53.6667 26.9987 53.6667Z"
              fill="#017358"
            />
          </svg>

          <h1 className="text-[40px] font-medium">
            Oops!!! Something went wrong
          </h1>
        </div>
        <div className="pt-[10%]">
          <h1 className="text-2xl font-medium">
            Oh no! It seems the page you're looking for is missing. But don't
            fret; we are on the case to restore it. In the meantime, explore our
            other mosque restoration projects or head back to the homepage.
          </h1>
          <Link
            to={"/"}
            className=" grid place-items-center pt-[10%] w-full items-center"
          >
            <CustomButtons text={"Go to Home Page"} button_width={"171px"} />
          </Link>
        </div>
        <div className="justify-center flex pt-[2%]">
          <h2 className=" text-2xl font-medium pb-[5%] pt-[3%]">
            Thank you for your understanding, and may your path be guided.
          </h2>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
