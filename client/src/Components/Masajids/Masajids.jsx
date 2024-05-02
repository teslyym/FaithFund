import React from "react";
import MasajidsCard from "./MasajidsCard";
import data from "./data";
import axios from "axios";
import api from "../../../utils/api";

const Masajids = () => {
  const [mosques, setMosques] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const getAllMasajids = async () => {
    setIsLoading(true);
    try {
      const response = await api.get("api/mosque");
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
        {mosques.map((Masajids, index) => (
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
