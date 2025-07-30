import React from 'react';
import './WeekendGetawaysCarousel.css';

const WeekendGetawaysCarousel = () => {
  const exampleGetaways = [
    {
      id: 'g1',
      imageUrl: '/pictures/capemay.jpg',
      rating: 9.8,
      reviewCount: 220,
      status: 'Exceptional',
      location: 'Berkeley Springs, WV',
      title: 'Private Log Cabin - Hot Tub, New Satellite Wi-Fi, Fireplace, Sm Pet...',
      price: 353,
      totalPrice: 706,
      nights: 7,
      feesIncluded: true,
      galleryImages: [
        '/pictures/capemay.jpg',
        '/pictures/oceancity.jpg',
      ],
    },
    {
      id: 'g2',
      imageUrl: '/pictures/oceancity.jpg',
      rating: 7.5,
      reviewCount: 750,
      status: 'Very Good',
      location: 'Branford, CT',
      title: 'Studio, Private Beach, Kayak, Paddle board, Pool, Hot tub',
      price: 671,
      totalPrice: 1349,
      nights: 7,
      feesIncluded: true,
      galleryImages: [
        '/pictures/oceancity.jpg',
        '/pictures/beachhaven.jpg',
      ],
    },
    {
      id: 'g3',
      imageUrl: '/pictures/beachhaven.jpg',
      rating: 5.2,
      reviewCount: 150,
      status: 'Good',
      location: 'Lake Tahoe, CA',
      title: 'Cozy Lakeside Cabin with Stunning Views',
      price: 250,
      totalPrice: 500,
      nights: 2,
      feesIncluded: false,
      galleryImages: [
        '/pictures/beachhaven.jpg',
        '/pictures/capemay.jpg',
      ],
    },
    {
      id: 'g4',
      imageUrl: '/pictures/1311905-0_2-2x.jpg',
      rating: 8.9,
      reviewCount: 300,
      status: 'Exceptional',
      location: 'Miami, FL',
      title: 'Luxury Beachfront Condo with Ocean Access',
      price: 800,
      totalPrice: 1600,
      nights: 2,
      feesIncluded: true,
      galleryImages: [
        '/pictures/1311905-0_2-2x.jpg',
        '/pictures/1311909-0_2-2x.jpg',
      ],
    },
  ];

  const getRatingColor = (rating) => {
    if (rating >= 8) {
      return 'green';
    } else if (rating >= 6) {
      return 'yellow';
    } else {
      return 'red';
    }
  };

  return (
    <section className="weekend-getaways-section">
      <div className="weekend-getaways-header">
        <h2 className="weekend-getaways-title">Discover weekend getaways</h2>
        <p className="weekend-getaways-subtitle">Showing deals for: Aug 29 - Aug 31</p>
      </div>
      <div className="weekend-getaways-carousel-wrapper">
        {exampleGetaways.map((getaway) => (
          <div className="getaway-card" key={getaway.id}>
            <div className="getaway-image-container">
              <img src={getaway.imageUrl} alt={getaway.title} className="getaway-image" />
              <div className="image-overlay-arrows">
                <button className="arrow-button left-arrow">&#10094;</button>
                <button className="arrow-button right-arrow">&#10095;</button>
              </div>
              <div className={`rating-badge ${getRatingColor(getaway.rating)}`}>
                <strong>{getaway.rating}</strong> {getaway.status} ({getaway.reviewCount} reviews)
              </div>
            </div>
            <div className="getaway-info">
              <p className="getaway-location">{getaway.location}</p>
              <h3 className="getaway-title">{getaway.title}</h3>
              <p className="getaway-price">${getaway.price}</p>
              <p className="getaway-nights">${getaway.totalPrice} for {getaway.nights} nights</p>
              {getaway.feesIncluded && <p className="getaway-fees">All fees included</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeekendGetawaysCarousel;