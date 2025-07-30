
import React from 'react';
import './PropertyStyleGallery.css';

const PropertyStyleGallery = ({ propertyTypes }) => {
  return (
    <section className="property-style-gallery-section">
      <h2 className="property-style-gallery-title">Find spaces that suit your style</h2>
      <div className="style-cards-wrapper">
        {propertyTypes.map((propertyType) => (
          <div key={propertyType.id} className="style-card">
            <img
              src={propertyType.imageUrl}
              alt={propertyType.name}
              className="style-card-image"
            />
            <p className="style-card-name">{propertyType.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropertyStyleGallery;
