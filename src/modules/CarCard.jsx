import React, { useState } from 'react';
import './CarCard.css';

const CarCard = ({ car }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="car-tile">
      <img src={car.image} alt={car.name} className="car-image" />
      <div className="car-name">{car.name}</div>
      <div className="car-info">
        <p>Year: {car.year}</p>
        <p>Fuel Type: {car.fuelType}</p>
        <p>Capacity: {car.capacity}</p>
        <p>Price: ${car.price}</p>
        <p>Rent Per Month: ${car.rentPerMonth}</p>
        <button className={isFavorite ? 'favorite-button active' : 'favorite-button'} onClick={handleFavoriteClick}>
          Favorite
        </button>
        <button className="rent-button">Rent Now</button>
      </div>
    </div>
  );
};

export default CarCard;
