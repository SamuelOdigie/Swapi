import { useState, useEffect } from "react";
import { starShips } from "../starwarzApi";
import StarshipCardItem from "./StarshipCardItem";

const StarshipCard = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchStarships = async () => {
      const fetchedStarships = await starShips();
      setStarships(fetchedStarships);
    };

    fetchStarships();
  }, []);

  return (
    <div className="starship-cards-container">
      {starships.map((starship, index) => (
        <StarshipCardItem key={index} starship={starship} />
      ))}
    </div>
  );
};

export default StarshipCard;
