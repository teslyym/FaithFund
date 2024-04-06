import React from "react";
import defImg from "../../assets/masjid.png";
import { Link } from "react-router-dom";
import CustomButtons from "../buttons/CustomButtons";

const MasajidsCard = ({
  title = "Ar-Rasheed Mosque, Yaba, Lagos",
  image = { defImg },
  id = "72367",
}) => {
  return (
    <div className="">
      <img src={defImg} alt={title} />
      <p>{title}</p>
      <Link to={`/mosque/${id}`}>
        <CustomButtons text={"Details"} button_width={"69px"} />
      </Link>
    </div>
  );
};

export default MasajidsCard;
