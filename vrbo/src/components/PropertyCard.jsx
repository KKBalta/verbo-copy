import React, { useState } from 'react';
import './PropertyCard.css';

const PropertyCard = ({ property }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const getRatingColor = (rating) => {
    if (rating >= 8) {
      return 'green';
    } else if (rating >= 6) {
      return 'yellow';
    } else {
      return 'red';
    }
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? property.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === property.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="property-card">
      <div className="property-image-container">
        <img src={property.images[currentImageIndex]} alt={property.title} className="property-image" />
        {property.images.length > 1 && (
          <>
            <button className="prev-button" onClick={handlePrevImage}>&#10094;</button>
            <button className="next-button" onClick={handleNextImage}>&#10095;</button>
          </>
        )}
      </div>
      <div className="property-info">
        <h3 className="property-title">{property.title}</h3>
        <p className="property-location">{property.location}</p>
        <div className={`property-rating-box ${getRatingColor(property.rating)}`}>
          {property.rating}
        </div>
        <p className="property-price">${property.price} per night</p>
      </div>
    </div>
  );
};

export default PropertyCard;