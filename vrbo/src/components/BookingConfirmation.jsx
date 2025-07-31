import React from 'react';
import './BookingConfirmation.css';

const BookingConfirmation = ({ bookingDetails, onGoHome }) => {
  if (!bookingDetails) {
    return (
      <div className="booking-confirmation-container">
        <h2>No Booking Details Available</h2>
        <p>Please book a property first.</p>
        <button onClick={onGoHome} className="go-home-button">Go to Home</button>
      </div>
    );
  }

  return (
    <div className="booking-confirmation-container">
      <h2>Booking Confirmed!</h2>
      <p>Thank you for your booking. Here are your details:</p>
      <div className="booking-details-card">
        <p><strong>Property:</strong> {bookingDetails.property_title}</p>
        <p><strong>Location:</strong> {bookingDetails.property_location}</p>
        <p><strong>Check-in:</strong> {bookingDetails.check_in}</p>
        <p><strong>Check-out:</strong> {bookingDetails.check_out}</p>
        <p><strong>Nights:</strong> {bookingDetails.nights}</p>
        <p><strong>Guests:</strong> {bookingDetails.guests}</p>
        <p><strong>Price per Night:</strong> ${bookingDetails.price_per_night}</p>
        <h3><strong>Total Price:</strong> ${bookingDetails.total_price}</h3>
      </div>
      <button onClick={onGoHome} className="go-home-button">Go to Home</button>
    </div>
  );
};

export default BookingConfirmation;
