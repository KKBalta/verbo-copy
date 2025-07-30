import React, { useState, useEffect } from 'react';
import './PropertyList.css';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/properties')
      .then(response => response.json())
      .then(data => setProperties(data));
  }, []);

  return (
    <div className="property-list-container">
      <h2>Featured Properties</h2>
      <div className="property-grid">
        {properties.map(property => (
          <div key={property.id} className="property-card">
            <img src={property.image} alt={property.title} />
            <h3>{property.title}</h3>
            <p>{property.location}</p>
            <p>${property.price} per night</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
