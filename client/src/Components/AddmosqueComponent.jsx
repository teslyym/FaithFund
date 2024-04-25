import React from "react";
import { Link } from "react-router-dom";

const AddmosqueComponent = () => {
  const hasToken = localStorage.getItem("token");
  return (
    <>
      {hasToken && (
        <Link
          to={"/registermosque"}
          className="fixed top-[80vh] group rounded-full bg-pry text-white z-50 right-8 aspect-square w-10 flex flex-col justify-center items-center text-3xl cursor-pointer"
        >
          <p>+</p>
          <p className="hidden group-hover:block w-40 text-lg absolute top-[120%]">
            Add Mosque
          </p>
        </Link>
      )}
    </>
  );
};

export default AddmosqueComponent;
