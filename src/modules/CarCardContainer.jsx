import React, { useState } from 'react';
import CarCard from './CarCard';
import './CarCardContainer.css';
import './CarCard.css';

const CarCardContainer = ({ cars }) => {
  const [favorites, setFavorites] = useState([]);

  const handleFavoriteClick = (carIndex) => {
    if (favorites.includes(carIndex)) {
      setFavorites(favorites.filter((index) => index !== carIndex));
    } else {
      setFavorites([...favorites, carIndex]);
    }
  };

  return (
    <div className="car-container">
      {cars.map((car, index) => (
        <div key={index} className="car-tile">
          <img src={car.image} alt={car.name} className="car-image" />
          <div className="car-name">{car.name}</div>
          <div className="car-info-left">
            <p>Year: {car.year}</p>
            <p>Fuel Type: {car.fuelType}</p>
            <p>Rent Per Month: ${car.rentPerMonth}</p>
          </div>
          <div className="car-info-right">
            <p>Capacity: {car.capacity}</p>
            <button className={`favorite-button ${favorites.includes(index) ? 'active' : ''}`} 
            onClick={() => handleFavoriteClick(index)}><pre>Fav  </pre></button>
            <button className="rent-button">Rent Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};


export default CarCardContainer;
