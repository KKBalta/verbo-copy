import React, { useState, useEffect } from 'react';
import PropertyCard from './PropertyCard';
import './PropertyList.css';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/properties')
      .then(response => response.json())
      .then(data => setProperties(data));
  }, []);

  return (
    <section className="property-list-section">
      <h2 className="property-list-title">Featured Properties</h2>
      <div className="property-grid">
        {properties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
};

export default PropertyList;