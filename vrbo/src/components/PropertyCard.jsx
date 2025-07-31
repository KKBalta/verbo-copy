import React, { useState } from 'react';

const PropertyCard = ({ property, checkInDate, checkOutDate, guests, onBookingSuccess }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [bookingMessage, setBookingMessage] = useState('');

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

  const handleBookNow = async () => {
    if (!checkInDate || !checkOutDate || !guests) {
      setBookingMessage('Please select check-in, check-out dates, and number of guests in the search bar.');
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:5000/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          property_id: property.id,
          check_in: checkInDate,
          check_out: checkOutDate,
          guests: parseInt(guests),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setBookingMessage(`Booking successful! Total price: ${data.booking_details.total_price} for ${data.booking_details.nights} nights.`);
        if (onBookingSuccess) {
          onBookingSuccess(data.booking_details);
        }
      } else {
        setBookingMessage(`Booking failed: ${data.error}`);
      }
    } catch (error) {
      setBookingMessage('An error occurred during booking.');
      console.error('Booking error:', error);
    }
  };

  return (
    <div className="property-card">
      <div className="property-image-container">
        <img src={property.images[currentImageIndex]} alt={property.title} className="property-image" loading="lazy" />
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
        <button className="book-now-button" onClick={handleBookNow}>Book Now</button>
        {bookingMessage && <p className="booking-message">{bookingMessage}</p>}
      </div>
    </div>
  );
};

export default PropertyCard;
