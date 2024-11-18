import { useState, useEffect } from "react";
import { starShips } from "../starwarzApi";
import StarshipCardItem from "./starshipCardItem";
import { Loading } from "@carbon/react";

const StarshipCard = () => {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStarships = async () => {
      setLoading(true);
      const data = await starShips();
      setStarships(data);
      setLoading(false);
    };

    fetchStarships();
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="starship-cards-container">
      {starships.map((starship, index) => (
        <StarshipCardItem key={index} starship={starship} />
      ))}
    </div>
  );
};

export default StarshipCard;
