import React, { useState, useEffect } from 'react';
import PropertyCard from './PropertyCard';
import './PropertyList.css';

const PropertyList = ({ location, checkInDate, checkOutDate, guests, onBookingSuccess }) => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      let url = 'http://127.0.0.1:5000/api/properties';
      const params = new URLSearchParams();

      if (location) {
        params.append('location', location);
      }
      if (checkInDate) {
        params.append('check_in', checkInDate);
      }
      if (checkOutDate) {
        params.append('check_out', checkOutDate);
      }

      if (params.toString()) {
        url += `?${params.toString()}`;
      }

      try {
        const response = await fetch(url);
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, [location, checkInDate, checkOutDate]);

  return (
    <section className="property-list-section">
      <h2 className="property-list-title">Featured Properties</h2>
      <div className="property-grid">
        {properties.map(property => (
          <PropertyCard
            key={property.id}
            property={property}
            checkInDate={checkInDate}
            checkOutDate={checkOutDate}
            guests={guests}
            onBookingSuccess={onBookingSuccess}
          />
        ))}
      </div>
    </section>
  );
};

export default PropertyList;