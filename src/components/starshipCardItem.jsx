import { useState } from "react";
import { Button } from "@carbon/react";
import "./starshipCard.css";

const StarshipCardItem = ({ starship }) => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleBuy = () => {
    alert(`Added ${quantity} of ${starship.name} to the basket!`);
  };

  return (
    <div className="starship-card">
      <h2>{starship.name}</h2>
      <p>
        <strong>Manufacturer:</strong> {starship.manufacturer}
      </p>
      <p>
        <strong>Cost:</strong> {starship.cost_in_credits} credits
      </p>

      <div className="quantity-controls">
        <Button kind="danger" size="sm" onClick={decrementQuantity}>
          -
        </Button>
        <span className="quantity-display">{quantity}</span>
        <Button size="sm" onClick={incrementQuantity}>
          +
        </Button>
      </div>

      <Button className="buy-button" onClick={handleBuy}>
        Buy
      </Button>
    </div>
  );
};

export default StarshipCardItem;
