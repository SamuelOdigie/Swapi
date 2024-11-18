import { useState, useEffect } from "react";
import { starShips } from "../starwarzApi";
import StarshipCardItem from "./StarshipCardItem";
import { Loading } from "@carbon/react";

const StarshipCard = () => {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStarships = async () => {
      setLoading(true);
      const fetchedStarships = await starShips();
      setStarships(fetchedStarships);
      setLoading(false);
    };

    fetchStarships();
  }, []);

  return (
    <div className="starship-cards-container">
      {loading ? (
        <Loading />
      ) : (
        starships.map((starship, index) => (
          <StarshipCardItem key={index} starship={starship} />
        ))
      )}
    </div>
  );
};

export default StarshipCard;
