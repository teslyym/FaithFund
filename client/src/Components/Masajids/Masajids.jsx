import React from "react";
import MasajidsCard from "./MasajidsCard";
import data from "./data";
import axios from "axios";
import api from "../../../utils/api";

const Masajids = ({ page }) => {
  const [mosques, setMosques] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const getAllMasajids = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://faithfund-beta.onrender.com/api/mosque"
      );
      console.log(response);
      setMosques(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  React.useEffect(() => {
    getAllMasajids();
  }, []);

  if (isLoading) {
    return <h1>Loading... mosques</h1>;
  }
  return (
    <div>
      <div className="grid grid-cols-4 gap-6">
        {page === "home"
          ? mosques
              .slice(0, 4)
              .map((Masajids, index) => (
                <MasajidsCard
                  key={index}
                  title={Masajids.name}
                  image={Masajids.image}
                  id={Masajids._id}
                />
              ))
          : mosques.map((Masajids, index) => (
              <MasajidsCard
                key={index}
                title={Masajids.name}
                image={Masajids.image}
                id={Masajids._id}
              />
            ))}
      </div>
    </div>
  );
};

export default Masajids;
