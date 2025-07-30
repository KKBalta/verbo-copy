import React from 'react';
import './PopularDestinations.css';

const PopularDestinations = () => {
  const destinations = [
    { name: 'Cape May', image: '/pictures/capemay.jpg' },
    { name: 'Ocean City', image: '/pictures/oceancity.jpg' },
    { name: 'Beach Haven', image: '/pictures/beachhaven.jpg' },
    { name: 'Montauk', image: '/pictures/montouk.jpg' },
    { name: 'Lake George', image: 'https://via.placeholder.com/300x200?text=Lake+George' },
    { name: 'Placeholder 6', image: 'https://via.placeholder.com/300x200?text=Placeholder+6' },
  ];

  return (
    <section className="destinations-section">
      <h2 className="destinations-title">Popular destinations</h2>
      <div className="destinations-carousel-wrapper">
        {destinations.map((destination) => (
          <div className="destinations-carousel-item" key={destination.name}>
            <img src={destination.image} alt={destination.name} />
            <p>{destination.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularDestinations;