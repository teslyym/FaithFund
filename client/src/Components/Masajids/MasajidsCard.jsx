import React from "react";
import defImg from "../../assets/masjid.png";
import { Link } from "react-router-dom";
import CustomButtons from "../buttons/CustomButtons";

const MasajidsCard = ({
  title = "Ar-Rasheed Mosque, Yaba, Lagos",
  image = defImg,
  id = "72367",
}) => {
  return (
    <div className="w-full">
      <img
        src={image || defImg}
        alt={title}
        className="w-full h-48 sm:h-52 md:h-56 object-cover rounded"
      />
      <p className="line-clamp-1 text-sm sm:text-base mt-2">{title}</p>
      <div className="mt-2">
        <Link to={`/MosqueDetails/${id}`}>
          <CustomButtons text={"Details"} button_width={"69px"} />
        </Link>
      </div>
    </div>
  );
};

export default MasajidsCard;
